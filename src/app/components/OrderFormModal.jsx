'use client';

/* eslint-disable no-unused-vars */
import * as yup from 'yup';
import { Box, Typography } from '@mui/material';
import propTypes from 'prop-types';
import { Form, Formik } from 'formik';
import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import SubmitBtn from '../common/components/SubmitBtn';
import FormikFileField from '@/shared/components/form/FormikFileField';

function OrderFormModal({ orderData, toggle, handler }) {
  const { user } = useSelector(state => state.auth);

  console.log('Order Data ==> ', orderData);

  return (
    <Box className=" w-full">
      <Formik
        enableReinitialize
        initialValues={{ image: '' }}
        validationSchema={yup.object({
          image: yup.mixed().required('Must attach screenshot to Complete payment'),
        })}
        onSubmit={async (values, { resetForm }) => {
          if (values?.image) {
            const formData = new FormData();
            formData.append('user', user?.profile?.id);
            formData.append('order', orderData?.id);
            formData.append('image', values?.image, values?.image?.name);
            const signupResp = await handler(formData);
            if (!signupResp?.error) {
              resetForm(values);
              toggle();
            }
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box className=" w-full flex flex-col gap-3 justify-between items-center py-4 border-b-2 border-gray-400">
              <Box className=" w-full flex items-center justify-between">
                <Typography variant="body1" className=" uppercase font-bold text-themeSecondary">
                  Name
                </Typography>
                <Typography variant="body1">
                  {`${user?.profile?.first_name} ${user?.profile?.last_name}`}
                </Typography>
              </Box>
              <Box className=" w-full flex items-center justify-between">
                <Typography variant="body1" className=" uppercase font-bold text-themeSecondary">
                  Shipped
                </Typography>
                <Typography variant="body1">
                  {moment(orderData?.ordered_date).format('DD MMM,YYYY')}
                </Typography>
              </Box>
              <Box className=" w-full flex items-center justify-between">
                <Typography variant="body1" className=" uppercase font-bold text-grey">
                  Billing Address
                </Typography>
                <Typography variant="body1">{orderData?.shipping_address}</Typography>
              </Box>
              <Box className=" w-full flex items-center justify-between">
                <Typography variant="body1" className=" uppercase font-bold text-grey">
                  Account Number
                </Typography>
                <Typography variant="body1">1234 5678 9012 3456</Typography>
              </Box>
              <Box className=" w-full flex items-center justify-between">
                <Typography variant="body1" className=" uppercase font-bold text-grey">
                  Order number
                </Typography>
                <Typography variant="body1" className=" text-themeSecondary">
                  {orderData?.id}
                </Typography>
              </Box>
              <Box className=" w-full flex items-center justify-between">
                <Typography variant="body1" className=" uppercase font-bold text-grey">
                  Total price
                </Typography>
                <Typography variant="body1" className=" text-themeSecondary">
                  {orderData?.total_price} $
                </Typography>
              </Box>
              <Box className=" w-full">
                <Typography variant="body2" className=" uppercase font-semibold text-grey">
                  Send the payment to this bank account and Upload screenshot for
                  payment confirmation.
                  <span className=" text-themeSecondary block">(Account number: 1234 5678 9012 3456)</span>
                </Typography>
              </Box>
            </Box>
            <Box className=" py-4 flex items-center gap-3 mt-5">
              <Typography>Payment Screenshot</Typography>
              <FormikFileField btnVariant="contained" minimal name="image" />
            </Box>
            <Box className=" w-full flex justify-end">
              <SubmitBtn label="Submit" isLoading={isSubmitting} />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

OrderFormModal.propTypes = {
  orderData: propTypes.object,
  toggle: propTypes.func,
  handler: propTypes.func,
};

export default OrderFormModal;
