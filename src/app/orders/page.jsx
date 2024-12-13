import { Box, Typography } from '@mui/material';
import React from 'react';
import OrdersTable from './components/OrdersTable';

function Orders() {
  return (
    <Box className=" h-screen px-20 flex justify-center">
      <Box className=" mt-[260px] mb-10 max-w-[1440px] w-full">
        <Typography variant="pageTitle" className=" text-start">
          Orders
        </Typography>
        <Box className=" mt-4">
          <OrdersTable />
        </Box>
      </Box>
    </Box>
  );
}

export default Orders;
