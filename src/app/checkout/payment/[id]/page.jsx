'use client';

import { Box, Typography } from '@mui/material';
import * as Yup from 'yup';
import React, { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Form, Formik } from 'formik';
import { pdf } from '@react-pdf/renderer';
import { useSelector } from 'react-redux';
import moment from 'moment';
import FormikFileField from '@/shared/components/form/FormikFileField';
import ExportPdfInvoice from '@/app/orders/[id]/components/pdf/ExportPdfInvoice';
import { useAddOrderPaymentDetailMutation, useGetOrdersByNumberQuery } from '@/services/private/orders';
import SubmitBtn from '@/app/common/components/SubmitBtn';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';

function Payment() {
  const router = useRouter();
  const { user } = useSelector(state => state.auth);
  const { id: orderId } = useParams();
  const { data = [] } = useGetOrdersByNumberQuery(orderId);

  const [addPayment, { error: paymentError, isSuccess: paymentSuccess, isLoading: paymentLoading }] =
    useAddOrderPaymentDetailMutation();
  useHandleApiResponse(paymentError, paymentSuccess, 'Payment Added successfully!');

  const orderDataById = useMemo(() => {
    if (data.length > 0) {
      return data.find(order => order.id === Number(orderId));
    }
    return {};
  }, [data]);

  return (
    <Box className=" mt-[260px] w-full flex justify-center">
      <Formik
        enableReinitialize
        initialValues={{
          image: '',
        }}
        validationSchema={Yup.object({
          image: Yup.mixed().required('Must attach screenshot to Complete payment'),
        })}
        onSubmit={async values => {
          if (values?.image) {
            const formData = new FormData();
            const doc = <ExportPdfInvoice orderData={orderDataById} />;
            const pdfBlob = await pdf(doc).toBlob();
            formData.append('image', values?.image, values?.image?.name);
            formData.append('receipt', pdfBlob, 'Order-Invoice.pdf');
            formData.append('user', user?.profile?.id);
            formData.append('order', orderDataById?.id);
            const paymentResp = await addPayment(formData);
            if (!paymentResp?.error) {
              router.push('/');
            }
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box className=" w-full flex flex-col gap-3 justify-between items-center py-4 border-b-2 border-gray-400">
              <Box className=" w-full flex items-center justify-between">
                <Typography variant="body1" className=" uppercase font-bold text-themeSecondary">
                  Nom
                </Typography>
                <Typography variant="body1">
                  {`${user?.profile?.first_name} ${user?.profile?.last_name}`}
                </Typography>
              </Box>
              <Box className=" w-full flex items-center justify-between">
                <Typography variant="body1" className=" uppercase font-bold text-themeSecondary">
                  Expédié
                </Typography>
                <Typography variant="body1">
                  {moment(orderDataById?.ordered_date).format('DD MMM,YYYY')}
                </Typography>
              </Box>
              <Box className=" w-full flex items-center justify-between">
                <Typography variant="body1" className=" uppercase font-bold text-grey">
                  adresse de facturation
                </Typography>
                <Typography variant="body1">{orderDataById?.shipping_address}</Typography>
              </Box>
              <Box className=" w-full flex items-center justify-between">
                <Typography variant="body1" className=" uppercase font-bold text-grey">
                  Numéro de commande
                </Typography>
                <Typography variant="body1" className=" text-themeSecondary notranslate">
                  ORD-{orderDataById?.id}
                </Typography>
              </Box>
              <Box className=" w-full flex items-center justify-between">
                <Typography variant="body1" className=" uppercase font-bold text-grey">
                  Prix total
                </Typography>
                <Typography variant="body1" className=" text-themeSecondary">
                  {orderDataById?.total_price} $
                </Typography>
              </Box>
              <Box className=" w-full">
                <Typography variant="body2" className=" uppercase font-semibold text-grey">
                  Envoyez le paiement sur ce compte bancaire et téléchargez une capture d&apos;écran pour la
                  confirmation du paiement.
                  <span className=" text-themeSecondary block">(Numéro de compte: 1234 5678 9012 3456)</span>
                </Typography>
              </Box>
            </Box>
            <Box className=" py-4 flex items-center gap-3 mt-5">
              <Typography>Capture d&apos;écran de paiement</Typography>
              <FormikFileField btnVariant="contained" minimal name="image" />
            </Box>

            <Box className=" w-full flex mt-2 pb-32">
              <SubmitBtn
                label="Submit"
                className=" w-full md:w-fit md:py-3 md:px-14 font-bold"
                isLoading={isSubmitting || paymentLoading}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Payment;
