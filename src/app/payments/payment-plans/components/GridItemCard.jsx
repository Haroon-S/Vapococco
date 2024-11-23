import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

function GridItemCard({
  textAlign = 'center',
  alignItems = 'center',
  head = '',
  subHead = '',
  icon = null,
  boxed = false,
  isHome = false,
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: { xs: 'center', md: alignItems },
        textAlign: { xs: 'center', md: textAlign },
        gap: '8px',
      }}
    >
      {boxed ? <Box className=" p-2 bg-fuchsia-950 rounded-full text-white">{icon}</Box> : icon}
      {!isHome && (
        <Typography variant="h6" className=" font-semibold">
          {head}
        </Typography>
      )}
      {isHome && (
        <Typography variant="body1" className=" text-lg capitalize font-normal">
          {head}
        </Typography>
      )}
      <Typography variant="body2">{subHead}</Typography>
    </Box>
  );
}

GridItemCard.propTypes = {
  textAlign: PropTypes.string.isRequired,
  alignItems: PropTypes.string.isRequired,
  head: PropTypes.string.isRequired,
  subHead: PropTypes.string.isRequired,
  icon: PropTypes.element,
  isHome: PropTypes.bool,
  boxed: PropTypes.bool,
};

export default GridItemCard;
