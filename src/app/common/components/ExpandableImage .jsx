/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Box, Dialog, DialogContent, IconButton } from '@mui/material';
import Image from 'next/image';
import { Close } from '@mui/icons-material';

function ExpandableImage({
  src,
  alt,
  isProductImage = false,
  fullImageClassName = 'w-full h-[90vh] max-h-[90vh] object-contain',
}) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Thumbnail Image */}
      {isProductImage ? (
        <Box className=" relative h-24 w-24 flex justify-end items-end">
          <Image src={src} alt={alt} className=" object-contain cursor-pointer" fill onClick={handleOpen} />
        </Box>
      ) : (
        <Box className=" relative h-16 w-full flex justify-end items-end">
          <Image src={src} alt={alt} className=" object-contain cursor-pointer" fill onClick={handleOpen} />
        </Box>
      )}

      {/* Full Image Modal */}
      <Dialog open={open} onClose={handleClose}>
        <Box className=" flex items-center justify-end">

          <IconButton onClick={handleClose} className="p-1">
            <Close fontSize="medium" />
          </IconButton>
        </Box>
        <DialogContent className="flex justify-center items-center p-4">
          <img
            src={src}
            alt={alt}
            className="w-full min-h-[80vh] max-h-[90vh] object-contain overflow-hidden"
            onClick={handleClose} // Optional: allow closing by clicking the image
          />
        </DialogContent>
      </Dialog>
    </>
  );
}

ExpandableImage.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  isProductImage: propTypes.bool.isRequired,
  fullImageClassName: propTypes.string,
};

export default ExpandableImage;
