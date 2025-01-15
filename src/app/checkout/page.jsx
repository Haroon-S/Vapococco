import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import CheckoutForm from './components/CheckoutForm';

function Checkout() {
  return (
    <Box className=" px-4 md:px-20 flex justify-center">
      <Box className=" mt-[260px] pb-20 max-w-[1440px] w-full">
        <Typography variant="pageTitle" className=" text-start">
          Checkout
        </Typography>
        <Paper className=" rounded-2xl mt-4 p-10 shadow-xl">
          <CheckoutForm />
        </Paper>
      </Box>
    </Box>
  );
}

export default Checkout;
