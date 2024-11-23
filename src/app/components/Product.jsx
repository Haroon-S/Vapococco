import React from 'react';
import propTypes from 'prop-types';
import { Box, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import { Favorite } from '@mui/icons-material';
import ProductSelectionForm from './ProductSelectionForm';

function Product({ color, image, title, description, rating = 0 }) {
  return (
    <Box className="w-full py-3 flex items-center pl-28" sx={{ backgroundColor: color }}>
      <Box className=" max-w-[990px] flex">
        <Box className=" flex gap-10 mx-0">
          <Box>
            <Image src={image.src} alt="Logo" width={140} height={140} />
          </Box>
          <Box className=" w-fit flex gap-3">
            <Box className=" w-7 h-7 flex items-center justify-center bg-white rounded-full">
              <Favorite style={{ fontSize: '18px' }} />
            </Box>
            <Box>
              <Typography variant="h6" className=" font-extrabold text-black">
                {title}
              </Typography>
              <Rating value={rating} readOnly />
              <Typography variant="body2" className="text-black">
                {description}
              </Typography>
            </Box>
          </Box>
        </Box>
        <ProductSelectionForm />
      </Box>
    </Box>
  );
}

Product.propTypes = {
  color: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  rating: propTypes.number,
};

export default Product;
