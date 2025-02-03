/* eslint-disable no-unused-vars */
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Image from 'next/image';
import React from 'react';

function OrderProductCard({ image, title, description, price, quantity }) {
  return (
    <Box className=" w-full flex justify-between ">
      <Box className=" flex gap-4">
        <Image src={image} height={80} width={80} />
        <Typography variant="body1" fontWeight={600}>{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
      <Typography variant="h6" className=" font-bold">{price}€</Typography>
    </Box>
  );
}

OrderProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
};

export default OrderProductCard;
