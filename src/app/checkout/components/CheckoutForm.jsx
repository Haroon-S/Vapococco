'use client';

import { Box, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid2 from '@mui/material/Unstable_Grid2';
import { pdf } from '@react-pdf/renderer';
import FormikFileField from '@/shared/components/form/FormikFileField';
import SubmitBtn from '@/app/common/components/SubmitBtn';
import { checkoutFormValSchema, checkoutInitValues } from './formUtils';
import { useAddOrderMutation, useAddOrderPaymentDetailMutation } from '@/services/private/orders';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';
import FormikField from '@/shared/components/form/FormikField';
import { clearCart } from '@/store/slices/cartSlice';
import ExportPdfInvoice from '@/app/orders/[id]/components/pdf/ExportPdfInvoice';

function CheckoutForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [addOrder, { error, isSuccess, isLoading: orderLoading }] = useAddOrderMutation();
  const [addPayment, { error: paymentError, isSuccess: paymentSuccess, isLoading: paymentLoading }] =
    useAddOrderPaymentDetailMutation();
  useHandleApiResponse(paymentError, paymentSuccess, 'Payment Added successfully!');
  useHandleApiResponse(error, isSuccess, 'Order Placed successfully!');
  const { user } = useSelector(state => state.auth);
  return (
    <Box className=" w-full">
      <Formik
        enableReinitialize
        initialValues={checkoutInitValues}
        validationSchema={checkoutFormValSchema}
        onSubmit={async values => {
          if (values?.image) {
            const formData = new FormData();
            formData.append('image', values?.image, values?.image?.name);
            const orderResp = await addOrder(values);
            if (orderResp?.data) {
              const doc = <ExportPdfInvoice orderData={orderResp?.data} />;
              const pdfBlob = await pdf(doc).toBlob();
              formData.append('receipt', pdfBlob, 'Order-Invoice.pdf');
              formData.append('user', user?.profile?.id);
              formData.append('order', orderResp?.data?.id);
              const paymentResp = await addPayment(formData);
              dispatch(clearCart());
              if (!paymentResp?.error) {
                router.push('/');
              }
            }
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
              <Grid2 xs={12}>
                <Box className=" w-full">
                  <Typography variant="body2" className=" uppercase font-semibold text-grey">
                    Envoyez le paiement sur ce compte bancaire et téléchargez une capture d&apos;écran pour la
                    confirmation du paiement.
                    <span className=" text-themeSecondary block">
                      (Numéro de compte: 1234 5678 9012 3456)
                    </span>
                  </Typography>
                </Box>
                <Box className=" py-4 flex items-center gap-3 mt-5">
                  <Typography>Capture d&apos;écran de paiement</Typography>
                  <FormikFileField btnVariant="contained" minimal name="image" />
                </Box>
              </Grid2>
            </Grid2>

            <Box className=" w-full flex mt-2">
              <SubmitBtn label="Submit" className=" w-full md:w-fit md:py-3 md:px-14 font-bold" isLoading={isSubmitting || orderLoading || paymentLoading} />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default CheckoutForm;
