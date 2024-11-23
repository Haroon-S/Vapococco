import { Box } from '@mui/material';
import React from 'react';
import CartsObject from './CartsObject';

function CartSection() {
  return (
    <Box className=" sticky bg-black h-full flex justify-center p-3">
      <Box className=" border border-white py-2">
        <CartsObject />
        <CartsObject />
        <CartsObject />
      </Box>
    </Box>
  );
}

export default CartSection;
