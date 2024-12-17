import React from 'react';
import propTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

function ProductDetail({ image, title, description }) {
  return (
    <Box className="w-full mt-8">
      <Typography variant="h3" className=" text-center">{title}</Typography>
      <Box className=" w-full flex justify-center items-center mt-16">
        <Image src={image || ''} alt="" width={300} height={300} />
      </Box>
      <Typography variant="body1" className=" text-grey mt-5">{description}</Typography>
    </Box>
  );
}

ProductDetail.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};

export default ProductDetail;
