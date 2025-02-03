'use client';

import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'next/navigation';
import SubmitBtn from '@/app/common/components/SubmitBtn';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';
import { useAddBankDetailsMutation } from '@/services/private/orders';

function VerifyInvoice() {
  const { id: orderId } = useParams();
  const [send, { error, isSuccess }] = useAddBankDetailsMutation();
  useHandleApiResponse(error, isSuccess, 'Mail Sent Successfully!');
  const handleResend = async () => {
    await send({ order_id: orderId });
  };
  return (
    <Box className="h-screen w-full flex justify-center items-center">
      <Stack justifyContent="center" alignItems="center" gap={3}>
        <Typography variant="body1" className="my-2 text-gray-600 text-center">
          We have sent an email to please follow a link to Send Payment Screenshot
        </Typography>
        <Typography variant="body1" className="my-2 text-gray-600 text-center">
          Have not received email yet?
        </Typography>
        <SubmitBtn onClick={handleResend} label="Resend Email" />
      </Stack>
    </Box>
  );
}

export default VerifyInvoice;
