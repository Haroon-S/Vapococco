import React from 'react';
import propTypes from 'prop-types';
import { Box } from '@mui/material';
import PageWrapper from '../common/components/PageWrapper';
import image from '@/assets/home-banner2.JPG';
import { primary } from '@/styles/common/colors';
import ProductsSection from './components/ProductsSection';

function Products({ searchParams }) {
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

Products.propTypes = {
  searchParams: propTypes.object,
};

export default Products;
