/* eslint-disable no-unused-vars */
import { Box, Button, TextField, useMediaQuery } from '@mui/material';
import propTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCart } from '@mui/icons-material';
import { useSnackbar } from 'notistack';
import StyledInputField from '@/shared/components/form/StyledInputField';
import FormikField from '@/shared/components/form/FormikField';
import { addToCart } from '@/store/slices/cartSlice';
import { useAddToCartMutation } from '@/services/private/cart';

function ProductAddToCart({
  product,
  sizeImage,
  price,
  variationId,
  size,
  sizeId,
  variationName,
  productTitle,
  handler,
  inStock,
}) {
  const { enqueueSnackbar } = useSnackbar();
  const isSmallScreen = useMediaQuery('(max-width:788px)');
  const { isAuthenticated } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [addToCartItem, { isLoading }] = useAddToCartMutation();
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = e => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = async () => {
    if (quantity > 0) {
      const payload = {
        variations: variationId,
        size: sizeId,
        variation_name: variationName,
        item_size: size,
        item_price: parseInt(price, 10),
        product_image: sizeImage,
        product,
        product_title: productTitle,
        quantity: parseInt(quantity, 10),
      };
      if (isAuthenticated) {
        const resp = await addToCartItem({
          product,
          variations: variationId,
          size: sizeId,
          quantity: parseInt(quantity, 10),
        });
        if (!resp?.error) {
          dispatch(addToCart(payload));
        } else {
          enqueueSnackbar(resp?.error?.data?.message, { variant: 'error' });
        }
      } else {
        dispatch(addToCart(payload));
      }
    }
  };

  return (
    <Box className=" flex flex-col justify-center items-center gap-1">
      <StyledInputField
        name="quantity"
        // disabled={!inStock}
        type="number"
        min={1}
        placeholder={variationId}
        onChange={e => {
          const value = parseInt(e.target.value, 10);
          if (value >= 0 || e.target.value === '') {
            handleQuantity(e); // Call your existing handler
          }
        }}
        value={quantity}
        className=" max-h-7"
      />
      {isSmallScreen ? (
        <Box className=" bg-black px-2">
          <ShoppingCart style={{ color: 'white', fontSize: '14px' }} />
        </Box>
      ) : (
        <Button
          variant="contained"
          className="w-full max-h-7 bg-black hover:bg-neutral-800 text-white text-xs font-medium md:text-[15px]"
          onClick={handleAddToCart}
          isDisabled={!inStock || isLoading}
        >
          ADD
        </Button>
      )}
    </Box>
  );
}

ProductAddToCart.propTypes = {
  product: propTypes.number,
  price: propTypes.number,
  variationId: propTypes.number,
  sizeId: propTypes.number,
  productTitle: propTypes.string,
  sizeImage: propTypes.string,
  size: propTypes.string,
  variationName: propTypes.string,
  handler: propTypes.func,
  inStock: propTypes.bool,
};

export default ProductAddToCart;
