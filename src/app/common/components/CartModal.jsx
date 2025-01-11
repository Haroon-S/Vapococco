import { Box, Button, CircularProgress, Modal, Tooltip, Typography } from '@mui/material';
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
  const { isAuthenticated } = useSelector(state => state.auth);
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
    <Box className=" bg-white rounded-xl h-[80%]">
      <Box className="">
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
            Aucun article trouvé!
          </Typography>
        )}
      </Box>
      <Box className=" py-3 px-3">
        <Box className="w-full flex items-center justify-between">
          <Typography variant="h6" className="text-black">
            Prix total
          </Typography>
          <Typography variant="h6" className="text-black">
            {cartState?.total_price} $
          </Typography>
        </Box>
        {isAuthenticated && (
          <Button
            startIcon={orderLoading ? <CircularProgress size={20} /> : undefined}
            onClick={handleOrder}
            variant="contained"
            className="text-white font-bold w-full mt-2 bg-black hover:text-white disabled:bg-themeMuted notranslate"
            disabled={!(cartState?.items?.length > 0) || orderLoading}
          >
            {checkSelectedLanguageText('MON PANIER', 'ORDER NOW')}
          </Button>
        )}
        {!isAuthenticated && (
          <Tooltip placement="top" title="Login First to place the order">
            <span>
              <Button
                startIcon={orderLoading ? <CircularProgress size={20} /> : undefined}
                onClick={handleOrder}
                variant="contained"
                className="text-white font-bold w-full mt-2 bg-black hover:text-white disabled:bg-themeMuted notranslate"
                disabled
              >
                MON PANIER
              </Button>
            </span>
          </Tooltip>
        )}
        {!isAuthenticated && (
          <Typography variant="body1" className=" md:hidden mt-2">
            Login First to place the order
          </Typography>
        )}
      </Box>
      <Modal open={modalOpen} onClose={toggleModal}>
        <Box sx={formModalStyles}>
          <ModalHeader title="Place Order" onClose={toggleModal} />
          <OrderFormModal orderData={orderData.data} toggle={toggleModal} handler={addPayment} />
        </Box>
      </Modal>
    </Box>
  );
}

export default CartModal;
