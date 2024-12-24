/* eslint-disable no-unused-vars */

'use client';

import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer({ footerText = '', footerBgColor = '', textColor = '', btnBg = '', btnText = '' }) {
  return (
    <Box className=" w-full bg-black h-fit md:h-10 flex flex-col md:flex-row gap-2 justify-center items-center py-3 md:py-0">
      <Link href="/">
        <Typography variant="body1" className=" text-xs md:text-base text-white">
          CGV
        </Typography>
      </Link>
      <Link href="/">
        <Typography variant="body1" className="text-xs md:text-base text-white">
          General Terms and Conditions
        </Typography>
      </Link>
      <Link href="/">
        <Typography variant="body1" className="text-xs md:text-base text-white">
          Privacy Policy
        </Typography>
      </Link>
      <Link href="/">
        <Typography variant="body1" className="text-xs md:text-base text-white">
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
