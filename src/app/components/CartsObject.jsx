/* eslint-disable no-unused-vars */
import { Box, Typography } from '@mui/material';
import propTypes from 'prop-types';
import Image from 'next/image';
import React, { useState } from 'react';
import { Add, Close, Remove } from '@mui/icons-material';
import icon1L from '@/assets/bottle-size-img/1L.png';
import { useDeleteCartMutation, useUpdateCartMutation } from '@/services/private/cart';

function CartsObject({ id, name, totalQuantity, totalPrice, variation, size }) {
  const [updateItemQuantityAndPrice] = useUpdateCartMutation();
  const [deleteItem] = useDeleteCartMutation();
  const handleAddQuantity = () => {
    updateItemQuantityAndPrice({ id, quantity: totalQuantity + 1 });
  };
  const handleSubQuantity = () => {
    if (totalQuantity !== 1) {
      updateItemQuantityAndPrice({ id, quantity: totalQuantity - 1 });
    }
  };
  const handleRemoveItem = () => {
    deleteItem(id);
  };
  return (
    <Box className=" w-full flex gap-2 py-5 px-5 border-b border-dashed border-white">
      <Box className=" relative h-16 w-10 flex justify-end items-end">
        <Image src={icon1L.src} alt="Logo" className=" object-contain" fill />
      </Box>
      <Box className=" text-white w-36">
        <Typography variant="body1" className="font-semibold">
          {totalPrice}$
        </Typography>
        <Typography variant="body1" className="font-bold">
          {name}
        </Typography>
        <Box className=" flex items-center justify-between mt-1">
          <Typography variant="body2">{size}</Typography>
          <Typography variant="body2">{variation}</Typography>
        </Box>
        <Box className=" relative w-24 py-1 flex items-center bg-white rounded-3xl text-black mt-2 text-center ">
          <Box
            onClick={handleSubQuantity}
            className=" absolute left-1 h-5 w-5 flex justify-center items-center bg-black rounded-full cursor-pointer"
          >
            <Remove style={{ color: 'white', fontSize: '12px' }} />
          </Box>
          <Box className=" w-full">
            <Typography variant="body2">{totalQuantity}</Typography>
          </Box>
          <Box
            onClick={handleAddQuantity}
            className=" absolute right-1 h-5 w-5 flex justify-center items-center bg-black rounded-full cursor-pointer"
          >
            <Add style={{ color: 'white', fontSize: '12px' }} />
          </Box>
        </Box>
      </Box>
      <Box
        onClick={handleSubQuantity}
        className=" h-5 w-5 flex justify-center items-center hover:bg-gray-800 rounded-full cursor-pointer"
      >
        <Close
          onClick={handleRemoveItem}
          style={{ color: 'white', fontSize: '16px' }}
          className="cursor-pointer"
        />
      </Box>
    </Box>
  );
}

CartsObject.propTypes = {
  id: propTypes.number,
  name: propTypes.string,
  totalQuantity: propTypes.number,
  totalPrice: propTypes.number,
  size: propTypes.number,
  variation: propTypes.string,
};

export default CartsObject;
