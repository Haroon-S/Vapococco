'use client';

/* eslint-disable no-unused-vars */
import { Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Box, Grid, Typography } from '@mui/material';
import { initialValues, validationSchema } from '../utilities/formUtils';
import SubmitBtn from '@/app/common/components/SubmitBtn';
import FormikField from '@/shared/components/form/login/FormikField';
import FormikRadioButtons from '@/shared/components/form/FormikRadioButton';
import { titleOptions } from '@/utilities/common';
import { useGetUserProfileQuery, useUpdateUserProfileMutation } from '@/services/private/profile';
import useHandleApiResponse from '@/customHooks/useHandleApiResponse';

function InformationForm({ username }) {
  const [profileInitValues, setProfileInitValues] = useState(initialValues);
  const [updateUserProfile, { error, isSuccess }] = useUpdateUserProfileMutation();
  useHandleApiResponse(error, isSuccess, 'Profile Update Successfully!');
  const { data: user } = useGetUserProfileQuery({ username });

  useEffect(() => {
    setProfileInitValues({
      title: user?.title || 'Mr',
      address: user?.address || '',
      first_name: user?.first_name || '',
      last_name: user?.last_name || '',
      company: user?.company || '',
      email: user?.email || '',
    });
  }, [user]);

  return (
    <Formik
      enableReinitialize
      initialValues={profileInitValues}
      validationSchema={validationSchema}
      onSubmit={async values => {
        await updateUserProfile({ username: user?.username, ...values });
      }}
    >
      {({ isSubmitting, setFieldValue, values, errors }) => (
        <Form className=" flex flex-col items-center justify-center w-full gap-2 px-6 sm:px-0">
          <Grid justifyContent="center" alignItems="center" columnSpacing={2} rowGap={2} container>
            <Grid item xs={12}>
              <Box className=" w-full flex flex-col justify-center items-center">
                <Typography className=" text-sm text-[#a6a6a6]">Titre</Typography>
                <Box>
                  <FormikRadioButtons name="title" options={titleOptions} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormikField type="text" name="first_name" placeholder="Prénom" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormikField type="text" name="last_name" placeholder="Nom de famille" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormikField type="text" name="company" placeholder="Entreprise" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormikField type="text" name="email" placeholder="Tapez votre email" />
            </Grid>
            <Grid item xs={12} md={12}>
              <FormikField type="text" name="address" placeholder="Tapez votre adresse" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormikField type="password" name="password" placeholder="Mot de passe" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormikField type="password" name="confirmPassword" placeholder="Confirmez le mot de passe" />
            </Grid>
            <Grid item className=" mt-6">
              <SubmitBtn label="SAVE" isLoading={isSubmitting} />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

InformationForm.propTypes = {
  username: propTypes.string.isRequired,
};

export default InformationForm;
