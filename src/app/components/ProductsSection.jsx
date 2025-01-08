/* eslint-disable no-unused-vars */

'use client';

import { Box } from '@mui/material';
import React, { useState } from 'react';
import TabPanel from '@/shared/components/TabPanel';
import { CustomTab, CustomTabs } from '../common/components/styled/StyledTabs';
import CartSection from './CartSection';
import WhyUsSection from './WhyUsSection';
import ProductList from './ProductList';
import useGetSelectedLanguageText from '@/customHooks/useGetSelectedLanguageText';

function ProductsSection() {
  const { checkSelectedLanguageText } = useGetSelectedLanguageText();
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (e, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <Box>
      <Box className=" w-full flex items-center justify-center">
        <CustomTabs value={activeTab} onChange={handleTabChange}>
          <CustomTab wrapped label={checkSelectedLanguageText('NOUVEAUTES', 'NEW')} className=" text-xs md:text-base normal-case notranslate" />

          <CustomTab wrapped label={checkSelectedLanguageText('INCONTOURNABLES', 'ESSENTIALS')} className=" text-xs md:text-base normal-case notranslate" />

          <CustomTab wrapped label={checkSelectedLanguageText('PROMOTIONS', 'PROMOTIONS')} className=" text-xs md:text-base normal-case notranslate" />
        </CustomTabs>
      </Box>
      <Box className=" relative border-t-8 border-t-black w-full overflow-hidden flex flex-col justify-center items-center ">
        <TabPanel stateValue={activeTab} index={0}>
          <ProductList filter="is_new" />
        </TabPanel>
        <TabPanel stateValue={activeTab} index={1}>
          <ProductList filter="is_essential" />
        </TabPanel>
        <TabPanel stateValue={activeTab} index={2}>
          <ProductList filter="is_promoted" />
        </TabPanel>
        <Box className=" flex md:justify-center px-2">
          <WhyUsSection />
        </Box>
        <Box className=" absolute top-0 ml-[990px] bg-black h-full">
          <CartSection />
        </Box>
      </Box>
    </Box>
  );
}

export default ProductsSection;
