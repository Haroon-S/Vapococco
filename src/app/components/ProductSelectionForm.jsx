/* eslint-disable no-unused-vars */
import { Box, Collapse, Stack, Typography } from '@mui/material';
import propTypes from 'prop-types';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Form, Formik } from 'formik';
import React, { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FormikField from '@/shared/components/form/FormikField';
import SubmitBtn from '../common/components/SubmitBtn';
import ExpandableImage from '../common/components/ExpandableImage ';
import ProductAddToCart from './ProductAddToCart';

function ProductSelectionForm({ variations, sizes, product, productTitle, handler, isLoading, inStock }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prev => !prev);

  return (
    <Box className=" w-full">
      <Grid2 className=" w-full flex justify-end" container spacing={1}>
        <Grid2 className=" w-full flex justify-end" container xs={12}>
          <Grid2 xs={2}>
            <Box className=" w-full h-full flex justify-end items-end">
              <Box
                onClick={toggle}
                className=" w-7 h-7 flex items-center justify-center bg-white rounded-full"
              >
                <ChevronDown />
              </Box>
            </Box>
          </Grid2>
          {sizes?.map(size => (
            <Grid2 xs={2}>
              <ExpandableImage
                src={size?.image}
                alt="image"
                thumbnailClassName="w-64 h-64 object-cover rounded-lg"
                fullImageClassName="max-w-[90%] max-h-[90vh] object-contain"
              />
            </Grid2>
          ))}
        </Grid2>
        <Grid2 className=" w-full" xs={12}>
          <Collapse in={dropdownOpen}>
            <Grid2 className=" w-full flex justify-end" container xs={12} spacing={1}>
              <Grid2 xs={2} />
              {sizes?.map(size => (
                <Grid2 xs={2}>
                  <Box className=" text-center">
                    <Typography variant="body1" className=" text-xl">
                      {size?.size}
                    </Typography>
                    <Typography variant="body1" className=" text-xl font-bold">
                      {size?.price}$
                    </Typography>
                  </Box>
                </Grid2>
              ))}
            </Grid2>
            {variations?.map(variation => (
              <Grid2 className=" w-full flex justify-end" container xs={12} columnSpacing={1} rowSpacing={3}>
                <Grid2 xs={2}>
                  <Box>
                    <Typography variant="body1" className=" font-semibold">
                      {variation?.variation_name}
                    </Typography>
                  </Box>
                </Grid2>
                {sizes?.map(field => (
                  <Grid2 xs={2}>
                    <ProductAddToCart
                      product={product}
                      productTitle={productTitle}
                      sizeImage={field?.image}
                      price={field?.price}
                      variationId={variation?.id}
                      size={field?.size}
                      sizeId={field?.id}
                      variationName={variation?.variation_name}
                    />
                  </Grid2>
                ))}
              </Grid2>
            ))}
          </Collapse>
        </Grid2>
      </Grid2>
    </Box>
  );
}

ProductSelectionForm.propTypes = {
  product: propTypes.number,
  productTitle: propTypes.string,
  isLoading: propTypes.bool,
  inStock: propTypes.bool,
  variations: propTypes.array,
  sizes: propTypes.array,
  handler: propTypes.func,
};

export default ProductSelectionForm;
