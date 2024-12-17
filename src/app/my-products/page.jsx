import React from 'react';
import propTypes from 'prop-types';
import { Box } from '@mui/material';
import PageWrapper from '../common/components/PageWrapper';
import { primary } from '@/styles/common/colors';
import image from '@/assets/home-banner2.JPG';
import ProductsSection from './components/ProductsSection';

function MyProducts({ searchParams }) {
  return (
    <PageWrapper
      bgColor={primary}
      heading="More Time for Your Dreams,"
      heading2="All in One Place"
      imageSrc={image.src}
      showSearch
      showButton
    >
      <Box className="">
        <ProductsSection
          searchParams={searchParams}
        />
      </Box>
    </PageWrapper>
  );
}

MyProducts.propTypes = {
  searchParams: propTypes.object,
};

export default MyProducts;
