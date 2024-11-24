import { Box, Typography } from '@mui/material';
import propTypes from 'prop-types';
import React from 'react';
import Image from 'next/image';
import { primary } from '@/styles/common/colors';

function WhyUsItems({ image, title }) {
  return (
    <Box className=" flex flex-col justify-center items-center group relative cursor-pointer transition-all duration-300">
      <Box className=" rounded-full p-5 border-4 border-themePrimary overflow-hidden">
        <Image src={image.src} alt="Logo" width={70} height={70} />
      </Box>
      <Box
        sx={{ backgroundColor: primary }}
        className=" absolute z-10 scale-0 h-full w-[150px] flex-col justify-start gap-2 rounded-xl bg-opacity-90 p-4 text-white group-hover:scale-100 transition-all duration-300"
      >
        <Typography variant="body2" className=" text-white text-center">
          {title}
        </Typography>
      </Box>
    </Box>
  );
}

WhyUsItems.propTypes = {
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
};

export default WhyUsItems;
