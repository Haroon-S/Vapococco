'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'next/navigation';
import InformationForm from './components/InformationForm';

function UserProfile() {
  const params = useParams();
  const { username } = params;
  return (
    <Box className=" bg-white py-10 px-6 rounded-[20px] max-w-[760px] h-fit" sx={{ boxShadow: '2px 0px 10px #b3b3b3' }}>
      <Box className=" relative border-t border-t-themePrimary flex flex-col justify-center items-center">
        <Box className=" bg-white px-2 absolute -top-4">
          <Typography variant="h5" className=" uppercase font-extrabold">
            My information
          </Typography>
        </Box>
        <Box className=" mt-20">
          <InformationForm username={username} />
        </Box>
      </Box>
    </Box>
  );
}

export default UserProfile;
