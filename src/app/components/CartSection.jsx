/* eslint-disable no-unused-vars */

'use client';

import { Box, Button, CircularProgress, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import CartsObject from './CartsObject';
import { useAddOrderMutation, useAddOrderPaymentDetailMutation } from '@/services/private/orders';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';
import { useGetCartQuery } from '@/services/private/cart';
import ModalHeader from '../common/components/ModalHeader';
import { formModalStyles } from '@/styles/mui/common/modal-styles';
import OrderFormModal from './OrderFormModal';
import useGetSelectedLanguageText from '@/customHooks/useGetSelectedLanguageText';

function CartSection() {
  const { checkSelectedLanguageText } = useGetSelectedLanguageText();
  const [addOrder, { error, isSuccess, isLoading: orderLoading }] = useAddOrderMutation();
  const [addPayment, { error: paymentError, isSuccess: paymentSuccess }] = useAddOrderPaymentDetailMutation();
  useHandleApiResponse(paymentError, paymentSuccess, 'Payment Added successfully!');
  useHandleApiResponse(error, isSuccess, 'Order Placed successfully!');
  const { data, isLoading, isFetching } = useGetCartQuery();
  const [modalOpen, setModalOpen] = useState(false);
  const [orderData, setOrderData] = useState({});
  const toggleModal = () => setModalOpen(prev => !prev);

  const loading = isLoading || isFetching;

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
          {loading && (
            <Box className=" h-full w-full flex justify-center items-center">
              <CircularProgress />
            </Box>
          )}
          {!loading &&
            data?.items?.length > 0 &&
            data?.items?.map(item => (
              <CartsObject
                color="#886142"
                id={item?.id}
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
          {!loading && data?.items?.length === 0 && (
            <Typography
              variant="body1"
              className=" text-white text-center h-full flex items-center justify-center"
            >
              No Item Found!
            </Typography>
          )}
        </Box>

        {/* Sticky Footer */}
        <Box className="sticky bottom-0 left-0 p-3 bg-black">
          <Box className="w-full flex items-center justify-between">
            <Typography variant="h6" className="text-white">
              Total Price
            </Typography>
            <Typography variant="h6" className="text-white">
              {data?.total_price}
            </Typography>
          </Box>
          <Button
            startIcon={orderLoading ? <CircularProgress size={20} /> : undefined}
            onClick={handleOrder}
            variant="contained"
            disabled={!(data?.items?.length > 0) || orderLoading}
            className="text-black font-bold w-full mt-2 bg-white hover:text-white disabled:bg-themeMuted notranslate"
          >
            {checkSelectedLanguageText('MON PANIER', 'ORDER NOW')}
          </Button>
        </Box>
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

export default CartSection;
