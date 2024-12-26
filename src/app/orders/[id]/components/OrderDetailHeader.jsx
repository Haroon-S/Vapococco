import { Box, Button, Typography } from '@mui/material';
import moment from 'moment';
import propTypes from 'prop-types';
import React from 'react';
import { useAddOrderAgainMutation } from '@/services/private/orders';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';

function OrderDetailHeader({ orderData }) {
  const [addOrder, { error, isSuccess }] = useAddOrderAgainMutation();
  useHandleApiResponse(error, isSuccess, 'Order Placed successfully!');

  return (
    <Box className=" w-full flex justify-between items-center py-4 border-b-2 border-gray-400">
      <Box>
        <Typography variant="h6" className=" uppercase font-bold text-themeSecondary">
          Shipped
        </Typography>
        <Typography variant="body1">{moment(orderData?.ordered_date).format('DD MMM,YYYY')}</Typography>
      </Box>
      <Box>
        <Typography variant="h6" className=" uppercase font-bold text-grey">
          Order number
        </Typography>
        <Typography variant="body1" className=" text-themeSecondary">
          ORD-{orderData?.id}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" className=" uppercase font-bold text-grey">
          Total price
        </Typography>
        <Typography variant="body1" className=" text-themeSecondary">
          {orderData?.total_price} $
        </Typography>
      </Box>
      <Box>
        <Button onClick={() => addOrder({ order_id: orderData?.id })} variant="contained">
          BUY AGAIN
        </Button>
      </Box>
    </Box>
  );
}

OrderDetailHeader.propTypes = {
  orderData: propTypes.object.isRequired,
};

export default OrderDetailHeader;
