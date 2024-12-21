/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from 'react';
import propTypes from 'prop-types';
import { Box, Button, CircularProgress, IconButton, Modal, Rating, Typography } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import ProductSelectionForm from './ProductSelectionForm';
import ModalHeader from '../common/components/ModalHeader';
import { fileViewModalStyles } from '@/styles/mui/common/modal-styles';
import ProductDetail from './ProductDetail';
import { useAddToCartMutation } from '@/services/private/cart';
import {
  useAddFavoriteProductsMutation,
  useDeleteFavoriteProductsMutation,
} from '@/services/private/favorite';
import ExpandableImage from '../common/components/ExpandableImage ';
import useGetSelectedLanguageText from '@/customHooks/useGetSelectedLanguageText';

function Product({
  id,
  color,
  title,
  description,
  price,
  rating = 0,
  image = [],
  variations = [],
  sizes = [],
  isFavorite = false,
  inStock = false,
}) {
  const dispatch = useDispatch();
  const { checkSelectedLanguageText } = useGetSelectedLanguageText();
  const [addToCart, { isLoading }] = useAddToCartMutation();
  const [addFavorite] = useAddFavoriteProductsMutation();
  const [deleteFavorite] = useDeleteFavoriteProductsMutation();
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(prev => !prev);
  const [favorite, setFavorite] = useState(isFavorite);

  const handleAddToCart = async () => {
    dispatch(addToCart({ product: id, variations: variations[0]?.id, size: sizes[0]?.id, quantity: 1 }));
    await addToCart({ product: id, variations: variations[0]?.id, size: sizes[0]?.id, quantity: 1 });
  };

  const primaryImage = useMemo(() => {
    if (image?.length > 0) {
      const primaryObj = image?.find(item => item.is_primary === true);
      return primaryObj ? primaryObj?.image : '';
    }
    return '';
  }, [image]);

  const handleAddFavorite = async () => {
    if (favorite) {
      await deleteFavorite(id);
    } else {
      await addFavorite({ product: id });
    }
    setFavorite(prev => !prev);
  };

  return (
    <Box className=" w-full relative py-3 flex items-center justify-center" sx={{ backgroundColor: color }}>
      <Box className=" w-screen h-full absolute -z-10 " sx={{ backgroundColor: color }} />
      <Box className=" w-[990px] mr-80 flex justify-between">
        <Box className=" flex gap-6 mx-0">
          <Box>
            <ExpandableImage
              src={primaryImage}
              alt="Image"
              thumbnailClassName="w-64 h-64 object-cover rounded-lg"
              fullImageClassName="max-w-[90%] max-h-[90vh] object-contain"
              isProductImage
            />
          </Box>
          <Box className=" w-44 flex gap-3">
            <IconButton
              onClick={handleAddFavorite}
              className=" w-7 h-7 flex items-center justify-center bg-white hover:bg-gray-200 rounded-full"
            >
              <Favorite style={{ fontSize: '18px', color: favorite ? 'red' : 'black' }} />
            </IconButton>
            <Box>
              <Typography
                onClick={toggleModal}
                variant="h6"
                noWrap
                className=" font-extrabold text-black cursor-pointer"
              >
                {title}
              </Typography>
              <Rating value={rating} readOnly style={{ color: '#F2E00F' }} />
              <Typography variant="body2" className="text-black cursor-pointer" onClick={toggleModal}>
                {description}
              </Typography>
            </Box>
          </Box>
        </Box>
        {variations.length > 1 && (
          <ProductSelectionForm
            variations={variations}
            sizes={sizes}
            product={id}
            productTitle={title}
            handler={addToCart}
            isLoading={isLoading}
            inStock={inStock}
          />
        )}
        {variations.length === 1 && (
          <Box className="">
            <Typography variant="body1" className=" font-bold text-center">
              {variations[0]?.variation_name}
            </Typography>
            <Typography variant="h5" className=" font-bold text-center">
              {sizes[0]?.price}${/* {variations[0]?.sizes[0]?.price}$ */}
            </Typography>
            <Button
              startIcon={isLoading ? <CircularProgress size={20} /> : undefined}
              disabled={isLoading || !inStock}
              onClick={handleAddToCart}
              variant="contained"
              className=" mt-2 bg-black text-white notranslate"
            >
              {inStock ? checkSelectedLanguageText("J'ACHATE", 'ADD TO CART') : 'OUT OF STOCK'}
            </Button>
          </Box>
        )}
      </Box>
      <Modal open={modalOpen} onClose={toggleModal}>
        <Box sx={{ ...fileViewModalStyles, paddingX: '20px', paddingY: '40px', width: '900px' }}>
          <ModalHeader title={title} onClose={toggleModal} />
          <ProductDetail title={title} image={primaryImage} description={description} />
        </Box>
      </Modal>
    </Box>
  );
}

Product.propTypes = {
  id: propTypes.number.isRequired,
  price: propTypes.number.isRequired,
  variations: propTypes.array.isRequired,
  sizes: propTypes.array.isRequired,
  color: propTypes.string.isRequired,
  image: propTypes.array.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  rating: propTypes.number,
  isFavorite: propTypes.bool,
  inStock: propTypes.bool,
};

export default Product;
