import React, { useState } from 'react';
import propTypes from 'prop-types';
import { Box, Modal, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import { Favorite } from '@mui/icons-material';
import ProductSelectionForm from './ProductSelectionForm';
import ModalHeader from '../common/components/ModalHeader';
import { fileViewModalStyles } from '@/styles/mui/common/modal-styles';
import ProductDetail from './ProductDetail';

function Product({ color, image, title, description, rating = 0 }) {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(prev => !prev);

  return (
    <Box className=" w-full relative py-3 flex items-center justify-center" sx={{ backgroundColor: color }}>
      <Box className=" w-screen h-full absolute -z-10 " sx={{ backgroundColor: color }} />
      <Box className=" max-w-[990px] mr-80 flex">
        <Box className=" flex gap-6 mx-0">
          <Box>
            <Image src={image.src} alt="Logo" width={140} height={140} />
          </Box>
          <Box className=" w-fit flex gap-3">
            <Box className=" w-7 h-7 flex items-center justify-center bg-white rounded-full">
              <Favorite style={{ fontSize: '18px' }} />
            </Box>
            <Box>
              <Typography onClick={toggleModal} variant="h6" noWrap className=" font-extrabold text-black cursor-pointer">
                {title}
              </Typography>
              <Rating value={rating} readOnly />
              <Typography variant="body2" className="text-black">
                {description}
              </Typography>
            </Box>
          </Box>
        </Box>
        <ProductSelectionForm />
      </Box>
      <Modal open={modalOpen} onClose={toggleModal}>
        <Box sx={{ ...fileViewModalStyles, paddingX: '20px', paddingY: '40px', width: '900px' }}>
          <ModalHeader title={title} onClose={toggleModal} />
          <ProductDetail title={title} image={image} description={description} />
        </Box>
      </Modal>
    </Box>
  );
}

Product.propTypes = {
  color: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  rating: propTypes.number,
};

export default Product;
