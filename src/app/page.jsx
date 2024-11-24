import React from 'react';
import { Box } from '@mui/material';
import PageWrapper from './common/components/PageWrapper';
// import shipping from '@/assets/icons/shipping.jpeg';
import { primary } from '@/styles/common/colors';
import image from '@/assets/home-banner2.JPG';
import ProductsSection from './components/ProductsSection';

function Home() {
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

export default Home;
