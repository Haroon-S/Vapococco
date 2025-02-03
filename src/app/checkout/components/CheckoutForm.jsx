'use client';

import { Box, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useRouter } from 'next/navigation';
import SubmitBtn from '@/app/common/components/SubmitBtn';
import { checkoutFormValSchema, checkoutInitValues } from './formUtils';
import { useAddBankDetailsMutation, useAddOrderMutation } from '@/services/private/orders';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';
import FormikField from '@/shared/components/form/FormikField';
import { clearCart } from '@/store/slices/cartSlice';

function CheckoutForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [addOrder, { error, isSuccess, isLoading: orderLoading }] = useAddOrderMutation();
  const [send, { error: emailError, isSuccess: sendSuccess }] = useAddBankDetailsMutation();
  useHandleApiResponse(emailError, sendSuccess, 'Mail Sent Successfully!');
  useHandleApiResponse(error, isSuccess, 'Order Placed successfully!');
  return (
    <Box className=" w-full">
      <Formik
        enableReinitialize
        initialValues={checkoutInitValues}
        validationSchema={checkoutFormValSchema}
        onSubmit={async values => {
          const orderResp = await addOrder(values);
          await send({ order_id: orderResp?.data?.id });
          if (!orderResp?.error) {
            dispatch(clearCart());
            router.push(`/checkout/verify/${orderResp?.data?.id}`);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid2 container spacing={5}>
              {/* BILLINGS DETAIL  */}

              <Grid2 xs={12}>
                <Typography variant="h5">Billing Details</Typography>
              </Grid2>
              <Grid2 xs={12} md={6}>
                <FormikField
                  name="billing_first_name"
                  label="First Name"
                  isRequired
                  type="text"
                  placeholder="First Name"
                  isStack
                />
              </Grid2>
              <Grid2 xs={12} md={6}>
                <FormikField
                  name="billing_last_name"
                  label="Last Name"
                  isRequired
                  type="text"
                  placeholder="Last Name"
                  isStack
                />
              </Grid2>
              <Grid2 xs={12} md={6}>
                <FormikField
                  name="billing_email"
                  type="text"
                  label="Email"
                  placeholder="Tapez votre email"
                  isStack
                  isRequired
                />
              </Grid2>
              <Grid2 xs={12} md={6}>
                <FormikField
                  name="billing_phone"
                  type="text"
                  label="Phone"
                  placeholder="Numéro de téléphone"
                  isStack
                  isRequired
                />
              </Grid2>
              <Grid2 xs={12} md={6}>
                <FormikField
                  name="billing_address"
                  label="Billing Address"
                  isRequired
                  type="text"
                  placeholder="Billing Address"
                  isStack
                />
              </Grid2>

              {/* SHIPPING DETAIL  */}

              <Grid2 xs={12}>
                <Typography variant="h5">Shipping Details</Typography>
              </Grid2>
              <Grid2 xs={12} md={6}>
                <FormikField
                  name="first_name"
                  label="First Name"
                  isRequired
                  type="text"
                  placeholder="First Name"
                  isStack
                />
              </Grid2>
              <Grid2 xs={12} md={6}>
                <FormikField
                  name="last_name"
                  label="Last Name"
                  isRequired
                  type="text"
                  placeholder="Last Name"
                  isStack
                />
              </Grid2>
              <Grid2 xs={12} md={6}>
                <FormikField
                  type="text"
                  label="Email"
                  name="email"
                  placeholder="Tapez votre email"
                  isStack
                  isRequired
                />
              </Grid2>
              <Grid2 xs={12} md={6}>
                <FormikField
                  type="text"
                  label="Phone"
                  name="phone"
                  placeholder="Numéro de téléphone"
                  isStack
                  isRequired
                />
              </Grid2>
              <Grid2 xs={12} md={6}>
                <FormikField
                  name="shipping_address"
                  label="Shipping Address"
                  isRequired
                  type="text"
                  placeholder="Shipping Address"
                  isStack
                />
              </Grid2>
            </Grid2>

            <Box className=" w-full flex gap-5 mt-4">
              <SubmitBtn
                label="Submit"
                className=" w-full md:w-fit md:py-3 md:px-14 font-bold"
                isLoading={isSubmitting || orderLoading}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default CheckoutForm;
