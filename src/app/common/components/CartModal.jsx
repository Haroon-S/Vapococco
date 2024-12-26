import { Box, Button, CircularProgress, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartsObject from '@/app/components/CartsObject';
import useGetSelectedLanguageText from '@/customHooks/useGetSelectedLanguageText';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';
import { useAddOrderMutation, useAddOrderPaymentDetailMutation } from '@/services/private/orders';
import ModalHeader from './ModalHeader';
import { formModalStyles } from '@/styles/mui/common/modal-styles';
import OrderFormModal from '@/app/components/OrderFormModal';

function CartModal() {
  const cartState = useSelector(state => state.cart);
  const { checkSelectedLanguageText } = useGetSelectedLanguageText();
  const [addOrder, { error, isSuccess, isLoading: orderLoading }] = useAddOrderMutation();
  const [addPayment, { error: paymentError, isSuccess: paymentSuccess }] = useAddOrderPaymentDetailMutation();
  useHandleApiResponse(paymentError, paymentSuccess, 'Payment Added successfully!');
  useHandleApiResponse(error, isSuccess, 'Order Placed successfully!');
  const [modalOpen, setModalOpen] = useState(false);
  const [orderData, setOrderData] = useState({});
  const toggleModal = () => setModalOpen(prev => !prev);

  const handleOrder = async () => {
    const resp = await addOrder();
    setOrderData(resp);
    toggleModal();
  };

  return (
    <Box className=" bg-black rounded-xl">
      <Box className="flex-1 overflow-y-scroll">
        {/* <CartsObject /> */}
        {cartState?.items?.length > 0 &&
          cartState?.items?.map(item => (
            <CartsObject
              color="#886142"
              id={item?.id}
              productId={item?.product}
              variationsId={item?.variations}
              sizeId={item?.size}
              variation={item?.variation_name}
              image={item?.product_image}
              name={item?.product_title}
              size={item?.item_size}
              description={item?.product_description}
              totalQuantity={item?.quantity}
              totalPrice={item?.item_price}
              rating={4}
            />
          ))}
        {cartState?.items?.length === 0 && (
          <Typography
            variant="body1"
            className=" text-black text-center h-full flex items-center justify-center"
          >
            No Item Found!
          </Typography>
        )}
      </Box>
      <Box className=" py-3 px-3">
        <Box className="w-full flex items-center justify-between">
          <Typography variant="h6" className="text-white">
            Total Price
          </Typography>
          <Typography variant="h6" className="text-white">
            {cartState?.total_price} $
          </Typography>
        </Box>
        <Button
          startIcon={orderLoading ? <CircularProgress size={20} /> : undefined}
          onClick={handleOrder}
          variant="contained"
          disabled={!(cartState?.items?.length > 0) || orderLoading}
          className="text-black font-bold w-full mt-2 bg-white hover:text-white disabled:bg-themeMuted notranslate"
        >
          {checkSelectedLanguageText('MON PANIER', 'ORDER NOW')}
        </Button>
      </Box>
      <Modal
        open={modalOpen}
        onClose={toggleModal}
      >
        <Box sx={formModalStyles}>
          <ModalHeader title="Place Order" onClose={toggleModal} />
          <OrderFormModal orderData={orderData.data} toggle={toggleModal} handler={addPayment} />
        </Box>
      </Modal>
    </Box>
  );
}

export default CartModal;
