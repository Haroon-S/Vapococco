import React from 'react';
import { Box } from '@mui/material';
import image from '@/assets/home-banner2.JPG';
import PageWrapper from '../common/components/PageWrapper';
import { primary } from '@/styles/common/colors';
import ProductsSection from './components/ProductsSection';

function PromotedOffer() {
  return (
    <PageWrapper
      bgColor={primary}
      heading="More Time for Your Dreams,"
      heading2="All in One Place"
      imageSrc={image.src}
      showSearch
      showButton
    >
      <Box className=" mt-4">
        <ProductsSection />
      </Box>
    </PageWrapper>
  );
}

export default PromotedOffer;
