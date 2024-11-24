/* eslint-disable no-unused-vars */

'use client';

import { Box, Button, Grid, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import propTypes from 'prop-types';
import { Form, Formik } from 'formik';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

// API & CUSTOM HOOKS
import { useSignUpMutation } from '@/services/public/auth';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';

// COMPONENTS
import FormikField from '@/shared/components/form/login/FormikField';
import SubmitBtn from '@/app/common/components/SubmitBtn';
import { initialValues, validationSchema } from '../utilities/formUtils';
import FormikRadioButtons from '@/shared/components/form/FormikRadioButton';
import { titleOptions } from '@/utilities/common';
import FormikSelect from '@/shared/components/form/FormikSelect';
import { useGetCountriesQuery } from '@/services/public/lookups';
import { getTransformedCountryOptions } from '@/utilities/transformers';
import { formikAuthSelectStyles } from '@/styles/formik/formik-styles';
import FormikFileField from '@/shared/components/form/FormikFileField';

function SignUpForm({ toggle, closeModal, handler }) {
  const { data: countries } = useGetCountriesQuery();
  const countriesOptions = getTransformedCountryOptions(countries);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm, setErrors }) => {
        const formData = new FormData();
        formData.append('email', values?.email);
        formData.append('username', values?.username);
        formData.append('password', values?.password);
        // Add profile fields as nested keys
        formData.append('profile.title', values?.title);
        formData.append('profile.first_name', values?.first_name);
        formData.append('profile.last_name', values?.last_name);
        formData.append('profile.company', values?.company);
        formData.append('profile.phone', values?.phone);
        formData.append('profile.siret', values?.siret);
        formData.append('profile.vat', values?.vat);
        if (values?.image) {
          formData.append('profile.image', values?.image, values?.image?.name);
        }
        const signupResp = await handler(formData);
        if ('error' in signupResp) {
          const fieldErrors = {};
          Object.keys(signupResp.error.data).forEach(key => {
            const [fieldError] = signupResp.error.data[key] || []; // Handle potential undefined values

            if (fieldError) {
              fieldErrors[key] = fieldError;
            }
          });
          setErrors(fieldErrors);
        } else {
          toggle('signin');
          resetForm(values);
        }
      }}
    >
      {({ isSubmitting, setFieldValue, values }) => (
        <Form className=" flex flex-col items-center justify-center w-full gap-2 px-6 sm:px-0">
          <Grid justifyContent="center" alignItems="center" columnSpacing={2} rowGap={2} container>
            <Grid item xs={12} md={6}>
              <FormikField type="text" name="email" placeholder="Type your email" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormikField type="password" name="password" placeholder="Type your password" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormikRadioButtons label="Title" name="title" options={titleOptions} />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormikField type="text" name="username" placeholder="Type your Username" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormikField type="text" name="first_name" placeholder="First Name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormikField type="text" name="last_name" placeholder="Last Name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormikField type="text" name="company" placeholder="Company" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormikField type="text" name="phone" placeholder="Phone Number" />
            </Grid>
            <Grid item xs={12}>
              <FormikSelect
                name="country"
                options={countriesOptions}
                placeholder="Country"
                isRequired
                style={formikAuthSelectStyles}
                isStack
                isPortal
              />
            </Grid>
            <Grid item xs={12}>
              <FormikField type="text" name="siret" placeholder="Siret" />
            </Grid>
            <Grid item xs={12}>
              <FormikField type="text" name="vat" placeholder="Vat Number" />
            </Grid>
            <Grid item xs={12} md={7}>
              <Box className=" flex items-center gap-3 mt-5">
                <Typography>KBIS (less than 3 months)</Typography>
                <FormikFileField btnVariant="contained" minimal name="image" />
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box className=" flex flex-col items-end h-full">
                <Typography
                  sx={{ fontSize: '16px', color: 'black', fontWeight: '600' }}
                  className="flex mb-1"
                >
                  Already have an Account?{' '}
                  <Button
                    variant="text"
                    onClick={() => toggle('signin')}
                    className=" text-blue-600 mx-2 p-0 mb-0 underline cursor-pointer"
                  >
                    Sign in
                  </Button>
                </Typography>
              </Box>
            </Grid>
            <Grid item className=" mt-6">
              <SubmitBtn label="REGISTER" isLoading={isSubmitting} />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

SignUpForm.propTypes = {
  toggle: propTypes.func.isRequired,
  closeModal: propTypes.func.isRequired,
  handler: propTypes.func.isRequired,
};

export default SignUpForm;
