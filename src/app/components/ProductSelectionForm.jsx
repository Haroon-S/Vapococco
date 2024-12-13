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

function ProductSelectionForm({ variations, sizes, product, handler, isLoading, inStock }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prev => !prev);
  const initialValues = useMemo(() => {
    const values = {};
    variations.forEach(variation => {
      sizes.forEach(size => {
        const fieldName = `quantity-${variation.id}-${size.id}`;
        values[fieldName] = 1; // Default value
      });
    });
    return values;
  }, [sizes, variations]);

  return (
    <Box className=" w-full">
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={async values => {
          const transformedArray = Object.entries(values).map(([key, quantity]) => {
            // Split the key to extract variation ID and size ID
            const [, variationID, sizeID] = key.split('-');

            // Return the transformed object
            return {
              product,
              variations: parseInt(variationID, 10),
              size: parseInt(sizeID, 10),
              quantity,
            };
          });

          transformedArray?.forEach(async item => {
            await handler(item);
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
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
                      alt="Size image"
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
                    <Grid2 className=" w-full flex justify-end" container xs={12} spacing={1}>
                      <Grid2 xs={2}>
                        <Box>
                          <Typography variant="body1" className=" font-semibold">
                            {variation?.variation_name}
                          </Typography>
                        </Box>
                      </Grid2>
                      {sizes?.map(field => (
                        <Grid2 xs={2}>
                          <FormikField
                            className=" max-h-7"
                            name={`quantity-${variation?.id}-${field?.id}`}
                            type="number"
                            placeholder="1"
                            isRequired
                            isStack
                          />
                        </Grid2>
                      ))}
                    </Grid2>
                  ))}
                  <Grid2 className=" flex justify-end" container xs={12} spacing={1}>
                    <Grid2 className=" flex justify-end" xs={4}>
                      <SubmitBtn label="ADD TO CART" className="w-full" isLoading={isSubmitting || isLoading} isDisabled={!inStock} />
                    </Grid2>
                  </Grid2>
                </Collapse>
              </Grid2>
            </Grid2>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

ProductSelectionForm.propTypes = {
  product: propTypes.number,
  isLoading: propTypes.bool,
  inStock: propTypes.bool,
  variations: propTypes.array,
  sizes: propTypes.array,
  handler: propTypes.func,
};

export default ProductSelectionForm;
