import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Add, Close, Remove } from '@mui/icons-material';
import icon1L from '@/assets/bottle-size-img/1L.png';

function CartsObject() {
  return (
    <Box className=" w-full flex gap-2 py-5 px-5 border-b border-dashed border-white">
      <Box className=" relative h-16 w-10 flex justify-end items-end">
        <Image src={icon1L.src} alt="Logo" className=" object-contain" fill />
      </Box>
      <Box className=" text-white w-36">
        <Typography variant="body1" className="font-semibold">
          0.00$
        </Typography>
        <Typography variant="body1" className="font-bold">
          Blonde Classic
        </Typography>
        <Box className=" flex items-center justify-between mt-1">
          <Typography variant="body2">50ml</Typography>
          <Typography variant="body2">PG/VG: 70/30</Typography>
        </Box>
        <Box className=" relative w-24 py-1 flex items-center bg-white rounded-3xl text-black mt-2 text-center">
          <Box className=" absolute left-1 h-5 w-5 flex justify-center items-center bg-black rounded-full">
            <Remove style={{ color: 'white', fontSize: '12px' }} />
          </Box>
          <Box className=" w-full">
            <Typography variant="body2">1</Typography>
          </Box>
          <Box className=" absolute right-1 h-5 w-5 flex justify-center items-center bg-black rounded-full">
            <Add style={{ color: 'white', fontSize: '12px' }} />
          </Box>
        </Box>
      </Box>
      <Close style={{ color: 'white', fontSize: '16px' }} />
    </Box>
  );
}

export default CartsObject;
