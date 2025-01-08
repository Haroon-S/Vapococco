import { Box, Button, CircularProgress, Typography } from '@mui/material';
import moment from 'moment';
import propTypes from 'prop-types';
import React from 'react';
import { useAddOrderAgainMutation } from '@/services/private/orders';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';

function OrderDetailHeader({ orderData, loading }) {
  const [addOrder, { error, isSuccess }] = useAddOrderAgainMutation();
  useHandleApiResponse(error, isSuccess, 'Order Placed successfully!');

  return (
    <Box className=" w-full flex justify-between items-center py-4 border-b-2 border-gray-400">
      <Box>
        <Typography variant="h6" className=" uppercase font-bold text-themeSecondary">
          Expédié
        </Typography>
        <Typography variant="body1">{loading ? <CircularProgress size={16} /> : moment(orderData?.ordered_date).format('DD MMM,YYYY')}</Typography>
      </Box>
      <Box>
        <Typography variant="h6" className=" uppercase font-bold text-grey">
          Numéro de commande
        </Typography>
        <Typography variant="body1" className=" text-themeSecondary">
          {loading ? <CircularProgress size={16} /> : `ORD-${orderData?.id}`}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" className=" uppercase font-bold text-grey">
          Prix total
        </Typography>
        <Typography variant="body1" className=" text-themeSecondary">
          {loading ? <CircularProgress size={16} /> : orderData?.total_price} $
        </Typography>
      </Box>
      <Box>
        <Button onClick={() => addOrder({ order_id: orderData?.id })} startIcon={loading ? <CircularProgress size={16} /> : undefined} disabled={loading} variant="contained">
          ACHETER À NOUVEAU
        </Button>
      </Box>
    </Box>
  );
}

OrderDetailHeader.propTypes = {
  orderData: propTypes.object.isRequired,
  loading: propTypes.bool,
};

export default OrderDetailHeader;
