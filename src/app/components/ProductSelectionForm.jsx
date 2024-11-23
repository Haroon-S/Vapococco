/* eslint-disable no-unused-vars */
import { Box, Collapse, Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import icon50ml from '@/assets/bottle-size-img/50ml.png';
import icon100ml from '@/assets/bottle-size-img/100ml.png';
import icon200ml from '@/assets/bottle-size-img/200ml.png';
import icon500ml from '@/assets/bottle-size-img/500ml.png';
import icon1L from '@/assets/bottle-size-img/1L.png';
import FormikField from '@/shared/components/form/FormikField';

function ProductSelectionForm() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prev => !prev);
  return (
    <Box className=" w-full">
      <Formik
        enableReinitialize
        initialValues={{}}
        validationSchema={{}}
        onSubmit={async values => {
          //   const resp = await handler({ ...values, service, user: user?.profile?.id });
          //   if (!resp?.error) {
          //     toggleModal();
          //   }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid2 className=" w-full" container spacing={1}>
              <Grid2 container xs={12}>
                <Grid2 xs={2}>
                  <Box className=" w-full h-full flex justify-end items-end">
                    <Box
                      onClick={toggle}
                      className=" w-7 h-7 flex items-center justify-center bg-white rounded-full"
                    >
                      <ChevronDown />
                    </Box>
                  </Box>
                </Grid2>
                <Grid2 xs={2}>
                  <Box className=" relative h-16 w-full flex justify-end items-end">
                    <Image src={icon50ml.src} alt="Logo" className=" object-contain" fill />
                  </Box>
                </Grid2>
                <Grid2 xs={2}>
                  <Box className=" relative h-16 w-full flex justify-end items-end">
                    <Image src={icon100ml.src} alt="Logo" className=" object-contain" fill />
                  </Box>
                </Grid2>
                <Grid2 xs={2}>
                  <Box className=" relative h-16 w-full flex justify-end items-end">
                    <Image src={icon200ml.src} alt="Logo" className=" object-contain" fill />
                  </Box>
                </Grid2>
                <Grid2 xs={2}>
                  <Box className=" relative h-16 w-full flex justify-end items-end">
                    <Image src={icon500ml.src} alt="Logo" className=" object-contain" fill />
                  </Box>
                </Grid2>
                <Grid2 xs={2}>
                  <Box className=" relative h-16 w-full flex justify-end items-end">
                    <Image src={icon1L.src} alt="Logo" className=" object-contain" fill />
                  </Box>
                </Grid2>
              </Grid2>
              <Grid2 container>
                <Collapse in={dropdownOpen}>
                  <Grid2 container xs={12} spacing={1}>
                    <Grid2 xs={2} />
                    <Grid2 xs={2}>
                      <Box className=" text-center">
                        <Typography variant="body1" className=" text-xl">
                          50ml
                        </Typography>
                        <Typography variant="body1" className=" text-xl font-bold">
                          00.00$
                        </Typography>
                      </Box>
                    </Grid2>
                    <Grid2 xs={2}>
                      <Box className=" text-center">
                        <Typography variant="body1" className=" text-xl">
                          100ml
                        </Typography>
                        <Typography variant="body1" className=" text-xl font-bold">
                          00.00$
                        </Typography>
                      </Box>
                    </Grid2>
                    <Grid2 xs={2}>
                      <Box className=" text-center">
                        <Typography variant="body1" className=" text-xl">
                          200ml
                        </Typography>
                        <Typography variant="body1" className=" text-xl font-bold">
                          00.00$
                        </Typography>
                      </Box>
                    </Grid2>
                    <Grid2 xs={2}>
                      <Box className=" text-center">
                        <Typography variant="body1" className=" text-xl">
                          500ml
                        </Typography>
                        <Typography variant="body1" className=" text-xl font-bold">
                          00.00$
                        </Typography>
                      </Box>
                    </Grid2>
                    <Grid2 xs={2}>
                      <Box className=" text-center">
                        <Typography variant="body1" className=" text-xl">
                          1L
                        </Typography>
                        <Typography variant="body1" className=" text-xl font-bold">
                          00.00$
                        </Typography>
                      </Box>
                    </Grid2>
                  </Grid2>
                  <Grid2 container xs={12} spacing={1}>
                    <Grid2 xs={2}>
                      <Box>
                        <Typography variant="body1">
                          PG/VG: <span className=" font-bold">50/50</span>
                        </Typography>
                      </Box>
                    </Grid2>
                    <Grid2 xs={2}>
                      <FormikField
                        className=" max-h-7"
                        name="price"
                        type="number"
                        placeholder="1"
                        isRequired
                        isStack
                      />
                    </Grid2>
                    <Grid2 xs={2}>
                      <FormikField
                        className=" max-h-7"
                        name="price"
                        type="number"
                        placeholder="1"
                        isRequired
                        isStack
                      />
                    </Grid2>
                    <Grid2 xs={2}>
                      <FormikField
                        className=" max-h-7"
                        name="price"
                        type="number"
                        placeholder="1"
                        isRequired
                        isStack
                      />
                    </Grid2>
                    <Grid2 xs={2}>
                      <FormikField
                        className=" max-h-7"
                        name="price"
                        type="number"
                        placeholder="1"
                        isRequired
                        isStack
                      />
                    </Grid2>
                    <Grid2 xs={2}>
                      <FormikField
                        className=" max-h-7"
                        name="price"
                        type="number"
                        placeholder="1"
                        isRequired
                        isStack
                      />
                    </Grid2>
                  </Grid2>
                  <Grid2 container xs={12} spacing={1}>
                    <Grid2 xs={2}>
                      <Box>
                        <Typography variant="body1">
                          PG/VG: <span className=" font-bold">70/30</span>
                        </Typography>
                      </Box>
                    </Grid2>
                    <Grid2 xs={2}>
                      <FormikField
                        className=" max-h-7"
                        name="price"
                        type="number"
                        placeholder="1"
                        isRequired
                        isStack
                      />
                    </Grid2>
                    <Grid2 xs={2}>
                      <FormikField
                        className=" max-h-7"
                        name="price"
                        type="number"
                        placeholder="1"
                        isRequired
                        isStack
                      />
                    </Grid2>
                    <Grid2 xs={2}>
                      <FormikField
                        className=" max-h-7"
                        name="price"
                        type="number"
                        placeholder="1"
                        isRequired
                        isStack
                      />
                    </Grid2>
                    <Grid2 xs={2}>
                      <FormikField
                        className=" max-h-7"
                        name="price"
                        type="number"
                        placeholder="1"
                        isRequired
                        isStack
                      />
                    </Grid2>
                    <Grid2 xs={2}>
                      <FormikField
                        className=" max-h-7"
                        name="price"
                        type="number"
                        placeholder="1"
                        isRequired
                        isStack
                      />
                    </Grid2>
                  </Grid2>
                  <Grid2 container xs={12} spacing={1}>
                    <Grid2 xs={2}>
                      <Box>
                        <Typography variant="body1">
                          PG/VG: <span className=" font-bold">30/70</span>
                        </Typography>
                      </Box>
                    </Grid2>
                    <Grid2 xs={2}>
                      <FormikField
                        className=" max-h-7"
                        name="price"
                        type="number"
                        placeholder="1"
                        isRequired
                        isStack
                      />
                    </Grid2>
                    <Grid2 xs={2}>
                      <FormikField
                        className=" max-h-7"
                        name="price"
                        type="number"
                        placeholder="1"
                        isRequired
                        isStack
                      />
                    </Grid2>
                    <Grid2 xs={2}>
                      <FormikField
                        className=" max-h-7"
                        name="price"
                        type="number"
                        placeholder="1"
                        isRequired
                        isStack
                      />
                    </Grid2>
                    <Grid2 xs={2}>
                      <FormikField
                        className=" max-h-7"
                        name="price"
                        type="number"
                        placeholder="1"
                        isRequired
                        isStack
                      />
                    </Grid2>
                    <Grid2 xs={2}>
                      <FormikField
                        className=" max-h-7"
                        name="price"
                        type="number"
                        placeholder="1"
                        isRequired
                        isStack
                      />
                    </Grid2>
                  </Grid2>
                </Collapse>
              </Grid2>
            </Grid2>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default ProductSelectionForm;
