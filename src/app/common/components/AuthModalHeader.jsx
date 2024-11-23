import React from 'react';
import { Box, Typography } from '@mui/material';
import propTypes from 'prop-types';

function AuthModalHeader({ title, children }) {
  return (
    <Box className=" relative flex justify-center border-2 border-themePrimary">
      <Box className=" absolute -top-4 flex items-center justify-center bg-white  mb-2">
        <Typography variant="h5" className=" font-bold uppercase">{title}</Typography>
      </Box>
      {children}
    </Box>
  );
}

AuthModalHeader.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node,
};

export default AuthModalHeader;
