import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { Payments } from '@mui/icons-material';
import image2 from '@/assets/business-page/image2.JPG';
import image3 from '@/assets/business-page/image3.JPG';

function FeatureSection() {
  return (
    <Box>
      <Box className=" bg-skin flex justify-center items-center py-32 px-5">
        <Box className=" w-full flex flex-col justify-center items-center max-w-[1024px] ">
          <Box className=" w-full flex flex-wrap gap-10">
            <Box className=" max-w-[550px]">
              <Box className=" bg-orange-500 rounded-full w-fit p-3 mb-2">
                <Sparkles className=" text-white" />
              </Box>
              <Typography variant="h3" className=" normal-case mb-6 font-semibold text-center md:text-start">
                En portal till dina framtida stamkunder
              </Typography>
              <Typography variant="body2" className=" text-center md:text-start font-medium">
                Online booking system with everything you need to run a business on Sweden largest marketplace
                for beauty and health. Save time and focus on what you are passionate about.
              </Typography>
              <Typography variant="body2" className=" text-center md:text-start my-6 font-medium">
                Online booking system with everything you need to run a business on Sweden largest marketplace
                for beauty and health. Save time and focus on what you are passionate about.
              </Typography>
              <Typography variant="body2" className=" text-center md:text-start my-6 font-medium">
                Online booking system with everything you need to run a business on Sweden largest marketplace
                for beauty and health. Save time and focus on what you are passionate about.
              </Typography>
              <Button variant="contained" color="primary" className=" w-full font-normal py-3 text-sm md:w-44">
                Prova Booklyz
              </Button>
            </Box>
            <Box className=" w-[350px] h-[350px] relative">
              <Image
                src={image2}
                alt="hero-image"
                className=" object-cover rounded-t-full rounded-b-full"
                fill
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className=" flex justify-center items-center py-32 px-5">
        <Box className=" w-full flex flex-col justify-center items-center max-w-[1024px] ">
          <Box className=" w-full flex flex-wrap flex-row-reverse justify-between gap-10">
            <Box className=" max-w-[550px]">
              <Box className=" bg-orange-500 rounded-full w-fit p-3 mb-2">
                <Payments className=" text-white" />
              </Box>
              <Typography variant="h3" className=" normal-case mb-4 font-semibold text-center md:text-start">
                Låt dina kunder betala vid bokning
              </Typography>
              <Typography variant="body2" className="text-center md:text-start font-medium">
                Online booking system with everything you need to run a business on Sweden largest marketplace
                for beauty and health. Save time and focus on what you are passionate about.
              </Typography>
              <Typography variant="body2" className="text-center md:text-start my-6 font-medium">
                Online booking system with everything you need to run a business on Sweden largest marketplace
                for beauty and health. Save time and focus on what you are passionate about.
              </Typography>
              <Typography variant="body2" className="text-center md:text-start my-6 font-medium">
                Online booking system with everything you need to run a business on Sweden largest marketplace
                for beauty and health. Save time and focus on what you are passionate about.
              </Typography>
              <Button variant="contained" color="primary" className=" w-full font-normal py-3 text-sm md:w-44">
                Prova Booklyz
              </Button>
            </Box>
            <Box className=" w-[350px] h-[350px] relative">
              <Image
                src={image3}
                alt="hero-image"
                className=" object-cover rounded-t-full rounded-b-full"
                fill
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default FeatureSection;
