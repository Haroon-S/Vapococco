'use client';

/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { Box, Button, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { searchFilterFormInitialValue } from '../utilities/data';
import FormikSearchInput from '@/shared/components/form/FormikSearchInput';
import FormikSelect from '@/shared/components/form/FormikSelect';
import FormikCheckbox from '@/shared/components/form/FormikCheckbox';
import { categoriesOptions, subCategoriesOptions } from '@/utilities/common';
import SubmitBtn from '@/app/common/components/SubmitBtn';

function ProductFilterForm({ onFormSubmit = () => {}, isLoading = false, searchParams = {} }) {
  const [initValues, setInitValues] = useState(searchFilterFormInitialValue);
  const handleSearch = (newValue, resetForm) => {
    if (!newValue) {
      onFormSubmit(searchFilterFormInitialValue);
      resetForm({ values: searchFilterFormInitialValue });
    }
  };

  const isFilterApplied = (values = {}) => {
    let applied = false;

    Object.values(values).forEach(value => {
      if (value) {
        applied = true;
      }
    });

    return applied;
  };

  useEffect(() => {
    if (searchParams) {
      setInitValues({
        sub_category: searchParams?.sub_category || '',
        sub_category__category: searchParams?.sub_category__category || '',
      });
    }
  }, [searchParams]);

  return (
    <Box className=" bg-[#E7E7E7] flex items-center justify-center w-full">
      {/* <Box className=" w-screen h-full absolute -z-10 bg-[#E7E7E7]" /> */}
      <Formik initialValues={initValues} onSubmit={values => onFormSubmit(values)} enableReinitialize>
        {({ values, resetForm }) => (
          <Form className=" max-w-[990px] mr-80 w-full py-6">
            <Box className=" pb-4 flex justify-between gap-16 w-full border-b border-gray-800">
              <FormikSelect
                name="sub_category"
                options={categoriesOptions}
                className=" shadow-md"
                placeholder="Catégorie"
                isPortal
              />
              <Box sx={{ minWidth: { xs: '100%', md: '300px' } }}>
                <FormikSearchInput
                  className=" shadow-md"
                  onChange={newValue => handleSearch(newValue, resetForm)}
                  name="search"
                  placeholder="Services de recherche..."
                />
              </Box>
              <FormikSelect
                name="sub_category__category"
                options={subCategoriesOptions}
                className=" shadow-md"
                placeholder="Sous-catégorie"
                isPortal
              />
            </Box>
            <Box className=" pt-4 flex justify-between gap-16 w-full border-t border-gray-800">
              <FormikCheckbox muiSize="small" label="EN STOCK" name="in_stock" />
              <FormikCheckbox muiSize="small" label="NOUVEAU" name="is_new" />
              <FormikCheckbox muiSize="small" label="PROMOS" name="is_promoted" />
              <FormikCheckbox muiSize="small" label="PRÉFÉRÉ" name="favorite" />
              <Box>
                {isFilterApplied(values) && (
                  <Box className=" flex items-center gap-3">
                    <SubmitBtn
                      size="small"
                      label="Recherche"
                      variant="contained"
                      type="submit"
                      isLoading={isLoading}
                    />
                    <Button
                      size="small"
                      variant="contained"
                      disabled={isLoading}
                      color="secondary"
                      onClick={async () => {
                        onFormSubmit(searchFilterFormInitialValue);
                        resetForm({ values: searchFilterFormInitialValue });
                      }}
                    >
                      Clair
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

ProductFilterForm.propTypes = {
  onFormSubmit: PropTypes.func,
  isLoading: PropTypes.bool,
  searchParams: PropTypes.object,
};

export default ProductFilterForm;
