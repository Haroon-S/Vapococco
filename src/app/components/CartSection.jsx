/* eslint-disable no-unused-vars */

'use client';

import { Box, Button, CircularProgress, Modal, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CartsObject from './CartsObject';
import { useAddOrderMutation, useAddOrderPaymentDetailMutation } from '@/services/private/orders';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';
import { useGetCartQuery } from '@/services/private/cart';
import ModalHeader from '../common/components/ModalHeader';
import { formModalStyles } from '@/styles/mui/common/modal-styles';
import OrderFormModal from './OrderFormModal';
import useGetSelectedLanguageText from '@/customHooks/useGetSelectedLanguageText';

function CartSection() {
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
    <Box className="sticky bg-black h-full flex justify-center p-3">
      <Box className="h-full min-w-[275px] relative border border-white py-2 flex flex-col overflow-hidden">
        {/* Scrollable Content */}
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
              className=" text-white text-center h-full flex items-center justify-center"
            >
              Aucun article trouvé!
            </Typography>
          )}
        </Box>

        {/* Sticky Footer */}
        <Box className="sticky bottom-0 left-0 p-3 bg-black">
          <Box className="w-full flex items-center justify-between">
            <Typography variant="h6" className="text-white">
              Prix total
            </Typography>
            <Typography variant="h6" className="text-white notranslate">
              {cartState?.total_price} $
            </Typography>
          </Box>
          {isAuthenticated && (
            <Button
              startIcon={orderLoading ? <CircularProgress size={20} /> : undefined}
              onClick={handleOrder}
              variant="contained"
              className="text-black font-bold w-full mt-2 bg-white hover:text-white disabled:bg-themeMuted notranslate"
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
                  className="text-black font-bold w-full mt-2 bg-white hover:text-white disabled:bg-themeMuted notranslate"
                  disabled
                >
                  MON PANIER
                </Button>
              </span>
            </Tooltip>
          )}
        </Box>
      </Box>
      <Modal open={modalOpen} onClose={toggleModal}>
        <Box sx={formModalStyles} className=" p-2 md:p-5">
          <ModalHeader title="Place Order" onClose={toggleModal} />
          <OrderFormModal orderData={orderData.data} toggle={toggleModal} handler={addPayment} />
        </Box>
      </Modal>
    </Box>
  );
}

export default CartSection;
