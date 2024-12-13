/* eslint-disable no-unused-vars */

'use client';

import { Box, Button, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import CartsObject from './CartsObject';
import { useAddOrderMutation } from '@/services/private/orders';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';
import { useGetCartQuery } from '@/services/private/cart';
import SectionLoader from '../common/loaders/SectionLoader';

function CartSection() {
  const [addOrder, { error, isSuccess, isLoading: orderLoading }] = useAddOrderMutation();
  useHandleApiResponse(error, isSuccess, 'Order Placed successfully!');
  const { data, isLoading, isFetching } = useGetCartQuery();

  const loading = isLoading || isFetching;

  const handleOrder = () => {
    addOrder();
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
            className="text-white font-bold w-full mt-2 disabled:text-gray-500 disabled:bg-primaryHover"
          >
            BUY
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CartSection;
