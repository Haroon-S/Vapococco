import React from 'react';
import { Box } from '@mui/material';
import shipping from '@/assets/icons/shipping.jpeg';
import packageIcon from '@/assets/icons/package.jpeg';
import badge from '@/assets/icons/badge.jpeg';
import varranty from '@/assets/icons/varranty.jpeg';
import WhyUsItems from './WhyUsItems';

function WhyUsSection() {
  return (
    <Box className="w-full py-6 flex items-center bg-white">
      <Box className=" max-w-[990px] flex items-center gap-10">
        <WhyUsItems image={shipping} title="Frais de port offerts à partir de 350€ HT" />
        <WhyUsItems image={packageIcon} title="Expédition le jour même si commande passée avant 14h30" />
        <WhyUsItems image={badge} title="Prix direct laboratoire" />
        <WhyUsItems image={varranty} title="Paiement sécurisé" />
      </Box>
    </Box>
  );
}

export default WhyUsSection;
