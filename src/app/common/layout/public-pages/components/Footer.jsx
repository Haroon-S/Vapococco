/* eslint-disable no-unused-vars */

'use client';

import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';

// Styles
import { Apple, Shop } from '@mui/icons-material';
import styles from '@/styles/containers/layout/footer.module.scss';
import { footerDividerStyles, footerLinksStyles } from '@/styles/mui/containers/layout/footer-styles';
import { footerContainerStyles } from '@/styles/mui/components/footer-top-sections-styles';
import logo from '@/assets/Booklyz.svg';
import paymentIcon1 from '@/assets/icons/payment-method-mastercard.svg';
import paymentIcon2 from '@/assets/icons/payment-method-visa.svg';
import paymentIcon3 from '@/assets/icons/payment-method-paypal.png';
import GooglePlay from '@/assets/GooglePlay.svg';
import AppStore from '@/assets/AppStore.svg';
import useGetUserRoles from '@/customHooks/useGetUserRoles';
import { border } from '@/styles/common/colors';
import NewsLetter from './NewsLetter';
import { useGetCategoriesQuery } from '@/services/private/categories';

function Footer({ footerText = '', footerBgColor = '', textColor = '', btnBg = '', btnText = '' }) {
  const { data: trendingSectionsData } = useGetCategoriesQuery({
    offset: '0',
    limit: '10',
  });
  const { data: topCategoriesData } = useGetCategoriesQuery({
    offset: '10',
    limit: '10',
  });
  const { data: featuredCategoriesData } = useGetCategoriesQuery({
    offset: '20',
    limit: '10',
  });
  const dateObject = new Date();
  const currentYear = dateObject.getFullYear();

  return (
    <Box className=" w-full bg-black h-10 flex gap-3 justify-center items-center">
      <Link href="/">
        <Typography variant="body1" className=" text-white">
          CGV
        </Typography>
      </Link>
      <Link href="/">
        <Typography variant="body1" className=" text-white">
          General Terms and Conditions
        </Typography>
      </Link>
      <Link href="/">
        <Typography variant="body1" className=" text-white">
          Privacy Policy
        </Typography>
      </Link>
      <Link href="/">
        <Typography variant="body1" className=" text-white">
          CGU
        </Typography>
      </Link>
    </Box>
  );
}

Footer.propTypes = {
  footerText: PropTypes.string,
  footerBgColor: PropTypes.string,
  textColor: PropTypes.string,
  btnBg: PropTypes.string,
  btnText: PropTypes.string,
};

export default Footer;
