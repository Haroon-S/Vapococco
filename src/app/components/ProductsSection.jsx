'use client';

import { Box } from '@mui/material';
import React, { useState } from 'react';
import TabPanel from '@/shared/components/TabPanel';
import { CustomTab, CustomTabs } from '../common/components/styled/StyledTabs';
import iconClassic from '@/assets/menu-icons/Classic.png';
import iconMenthe from '@/assets/menu-icons/Menthe.png';
import iconMixFruits from '@/assets/menu-icons/MIX-FRUITS.png';
import iconMonoFruits from '@/assets/menu-icons/MONO-FRUIT.png';
import iconCocktail from '@/assets/menu-icons/Cocktail.png';
import Product from './Product';
import CartSection from './CartSection';
import WhyUsSection from './WhyUsSection';

function ProductsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (e, newValue) => {
    setActiveTab(newValue);
  };
  return (
    <Box>
      <Box className=" w-full flex items-center justify-center">
        <CustomTabs value={activeTab} onChange={handleTabChange}>
          <CustomTab wrapped label="News" className=" text-base normal-case" />

          <CustomTab wrapped label="Essentials" className=" text-base normal-case" />

          <CustomTab wrapped label="Promotions" className=" text-base normal-case" />
        </CustomTabs>
      </Box>
      <Box className=" relative pt-2 bg-black w-full overflow-hidden ">
        <TabPanel stateValue={activeTab} index={0}>
          <Product color="#886142" image={iconClassic} title="Classic" description="description" rating={4} />
          <Product color="#d0c5bf" image={iconMenthe} title="Menthe" description="description" rating={4} />
          <Product color="#e5d2aa" image={iconMixFruits} title="Mix Fruits" description="description" rating={4} />
          <Product color="#efe5ca" image={iconClassic} title="Classic" description="description" rating={4} />
          <Product color="#ffc384" image={iconCocktail} title="Cocktail" description="description" rating={4} />
          <Product color="#fb727a" image={iconMonoFruits} title="Mono Fruits" description="description" rating={4} />
        </TabPanel>
        <TabPanel stateValue={activeTab} index={1}>
          <Product color="#886142" image={iconClassic} title="Classic" description="description" rating={4} />
          <Product color="#d0c5bf" image={iconMenthe} title="Menthe" description="description" rating={4} />
          <Product color="#e5d2aa" image={iconMixFruits} title="Mix Fruits" description="description" rating={4} />
          <Product color="#efe5ca" image={iconClassic} title="Classic" description="description" rating={4} />
          <Product color="#ffc384" image={iconCocktail} title="Cocktail" description="description" rating={4} />
          <Product color="#fb727a" image={iconMonoFruits} title="Mono Fruits" description="description" rating={4} />
        </TabPanel>
        <TabPanel stateValue={activeTab} index={2}>
          <Product color="#886142" image={iconClassic} title="Classic" description="description" rating={4} />
          <Product color="#d0c5bf" image={iconMenthe} title="Menthe" description="description" rating={4} />
          <Product color="#e5d2aa" image={iconMixFruits} title="Mix Fruits" description="description" rating={4} />
          <Product color="#efe5ca" image={iconClassic} title="Classic" description="description" rating={4} />
          <Product color="#ffc384" image={iconCocktail} title="Cocktail" description="description" rating={4} />
          <Product color="#fb727a" image={iconMonoFruits} title="Mono Fruits" description="description" rating={4} />
        </TabPanel>
        <WhyUsSection />
        <Box className=" absolute top-0 right-28 bg-black h-full">
          <CartSection />
        </Box>
      </Box>
    </Box>
  );
}

export default ProductsSection;
