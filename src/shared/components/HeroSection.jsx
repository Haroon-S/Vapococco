/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import CommonFilterForm from '@/app/common/components/CommonFilterForm';
import HeroSlider from '@/app/components/HeroSlider';

function HeroSection({ heading = '', heading2 = '', Description = '', imageSrc = '', showSearch = false, height = '400px' }) {
  return (
    <Box className=" w-full pt-[60px] md:pt-[130px]">
      <HeroSlider />
    </Box>
  );
}

HeroSection.propTypes = {
  heading: PropTypes.string.isRequired,
  heading2: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  showSearch: PropTypes.bool.isRequired,
  height: PropTypes.string.isRequired,
};

export default HeroSection;
