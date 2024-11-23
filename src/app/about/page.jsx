import { Box, Typography } from '@mui/material';
import React from 'react';
import PageWrapper from '../common/components/PageWrapper';
import image from '@/assets/home-banner.jpg';
import { primary } from '@/styles/common/colors';

function About() {
  return (
    <PageWrapper bgColor={primary} heading="About Booklyz" imageSrc={image.src} showButton height="250px">
      <Box className=" mt-12">
        <Typography variant="body1" className=" font-medium">
          At Booklyz, we believe in making life simpler. Whether you’re booking a beauty treatment, medical
          consultation, or wellness service, our platform brings everything to one place. Designed with
          efficiency and elegance in mind, Booklyz is your go-to for high-quality appointments that fit
          seamlessly into your busy schedule.
        </Typography>
        <Typography variant="body1" className=" mt-6 font-medium">
          Our mission is to save you time by connecting you with trusted professionals across Bulgaria. We
          cater to those who value convenience, quality, and a streamlined experience. With Booklyz, it’s easy
          to browse, compare, and book services that meet your needs—all with just a few clicks.
        </Typography>
        <Typography variant="body1" className=" mt-6 font-medium">
          Join thousands of women who rely on Booklyz to manage their appointments, feel their best, and focus
          on what matters most.
        </Typography>
        <Typography variant="h6" className=" mt-6 font-bold">
          Kontaktinformation
        </Typography>
        <Typography variant="body1" className=" mt-6 font-medium">
          Behöver du komma i kontakt med oss? Här hittar du vanliga frågor och svar och kontakt till support.
        </Typography>
        <Typography variant="body1" className=" mt-6 font-medium">
          Booklyz i Stockholm AB
        </Typography>
        <Typography variant="body1" className=" mt-1 font-medium">
          Grev Turegatan 30
        </Typography>
        <Typography variant="body1" className=" mt-1 font-medium">
          114 38 Stockholm
        </Typography>
        <Typography variant="body1" className=" mt-1 font-medium">
          Telefon: 0771-67 67 00
        </Typography>
        <Typography variant="body1" className=" mt-1 font-medium">
          E-postadress: kontakt@Booklyz.se (kontakta support här)
        </Typography>
        <Typography variant="body1" className=" mt-1 font-medium">
          Organisationsnummer: 556580-5412
        </Typography>
        <Typography variant="body1" className=" mt-1 font-medium">
          VAT-nummer: SE556580541201
        </Typography>
        <Typography variant="body1" className=" mt-6 font-medium">
          Booklyz innehar F-skattesedel.
        </Typography>
      </Box>
    </PageWrapper>
  );
}

export default About;
