'use client';

import Image from 'next/image';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/components/slider.css';
import '@/styles/components/slider.scss';
import { primary } from '@/styles/common/colors';
import slide1 from '@/assets/hero-slider-1.jpg';

function HeroSlider() {
  const images = [slide1, slide1, slide1];
  return (
    <Box className="relative w-full">
      <Box className=" hidden absolute flex items-center justify-between z-50 w-full top-1/3 px-4">
        <IconButton
          className="button-prev group"
          sx={{
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: primary,
              '& .MuiSvgIcon-root': {
                color: 'white', // Change the icon color on hover
              },
            },
          }}
        >
          <ArrowBack
            sx={{ fontSize: '30px', color: primary, cursor: 'pointer' }}
          />
        </IconButton>
        <IconButton
          className="button-next"
          sx={{
            backgroundColor: 'white',
            '&:hover': {
              backgroundColor: primary,
              '& .MuiSvgIcon-root': {
                color: 'white', // Change the icon color on hover
              },
            },
          }}
        >
          <ArrowForward
            sx={{ fontSize: '30px', color: primary, cursor: 'pointer' }}
          />
        </IconButton>
      </Box>
      <Swiper
        className=" mt-6 md:mt-16"
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        modules={[Autoplay, Navigation]}
      >
        {images?.map(item => (
          <SwiperSlide>
            <Image src={item.src} alt="slide" width={2600} height={300} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default HeroSlider;
