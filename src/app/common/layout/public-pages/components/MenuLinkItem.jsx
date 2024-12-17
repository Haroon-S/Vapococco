/* eslint-disable no-unused-vars */
import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

function MenuLinkItem({
  label,
  id = '',
  path = '',
  icon = null,
}) {
  return (
    <Link href={path}>
      <Box className=" flex flex-col justify-center items-center gap-3">
        {icon && (
        <Box className=" relative h-28 w-28">
          <Image
            src={icon}
            alt="Logo"
            fill
            className=" object-contain"
          />
        </Box>
        )}
        <Typography
          variant="body3"
          fontSize="inherit"
          fontWeight="inherit"
          color="inherit"
          className=" text-white uppercase w-28 text-center notranslate"
        >
          {label}
        </Typography>
      </Box>
    </Link>
  );
}

MenuLinkItem.propTypes = {
  id: propTypes.string,
  path: propTypes.string,
  label: propTypes.string.isRequired,
  icon: propTypes.element,
};

export default MenuLinkItem;
