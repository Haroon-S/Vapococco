/* eslint-disable no-unused-vars */

'use client';

import { Box, Button, Grid, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import Link from 'next/link';
import propTypes from 'prop-types';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

// API & CUSTOM HOOKS
import { onLoggedIn } from '@/store/slices/authSlice';
import { useLoginMutation } from '@/services/public/auth';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';

// COMPONENTS & UTILITIES
import FormikField from '@/shared/components/form/login/FormikField';
import SubmitBtn from '@/app/common/components/SubmitBtn';
import { initialValues, validationSchema } from '../utilities/formUtils';
import { createPaymentCookie, createTokenCookie } from '@/utilities/cookiesHelpers';

function SignInForm({ toggle, closeModal, handler }) {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async values => {
        const signInResp = await handler({ ...values, email: values?.email?.toLowerCase() });
        if (signInResp?.data) {
          await createTokenCookie(signInResp?.data);
          dispatch(onLoggedIn(signInResp?.data));
          window.location.href = '/';
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className=" flex flex-col items-center justify-center w-full px-6 sm:px-0">
          <Grid justifyContent="center" alignItems="center" columnSpacing={2} rowGap={2} container>
            <Grid item xs={12}>
              <FormikField type="text" name="email" placeholder="Enter your email" />
            </Grid>
            <Grid item xs={12}>
              <FormikField type="password" name="password" placeholder="Enter your password" />
            </Grid>
          </Grid>
          <Grid justifyContent="center" alignItems="center" columnSpacing={2} rowGap={2} container>
            <Grid item xs={12}>
              <Box className=" flex flex-col items-center mt-4">
                <Typography
                  className="flex mb-1"
                  sx={{
                    fontSize: { xs: '14px', md: '16px' },
                    color: 'black',
                    fontWeight: { xs: '500', md: '600' },
                  }}
                >
                  {'Don\'t have an account?'}
                  <Button
                    variant="text"
                    onClick={() => toggle('signup')}
                    className=" text-blue-600 mx-2 p-0 mb-0 underline cursor-pointer"
                  >
                    Register Now!
                  </Button>
                </Typography>
              </Box>
            </Grid>
            <Box className=" flex items-center gap-4">
              <SubmitBtn label="Confirm" className="my-3 font-bold uppercase" isLoading={isSubmitting} />
              <Link href="/auth/forgot-password" className="my-3 font-bold uppercase py-2 px-4 bg-grey text-white hover:bg-black transition-all duration-300 rounded hover:text-white">
                Forgot Password?
              </Link>
            </Box>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

SignInForm.propTypes = {
  toggle: propTypes.func.isRequired,
  closeModal: propTypes.func.isRequired,
  handler: propTypes.func.isRequired
};

export default SignInForm;
