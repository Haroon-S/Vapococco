import React, { useCallback } from 'react';
import { Box, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import propTypes from 'prop-types';
import { useField } from 'formik';

function FormikRadioButtons({ label, options, name, onChange = () => {}, }) {
  const [field, meta] = useField(name);
  const { value, onChange: onValueChange } = field;
  const { error } = meta;

  const handleChange = useCallback(
    e => {
      onValueChange(e);

      if (onChange) onChange(e);
    },
    [value]
  );

  return (
    <Grid container spacing={1} className=" flex items-center">
      {label && (
        <Grid item xs={12} md={3}>
          <Typography variant="label" className=" text-[#a6a6a6]">
            {label}
          </Typography>
        </Grid>
      )}

      <Grid item xs={12} md={label ? 9 : 3}>
        <Box className=" w-full flex flex-col gap-3">
          <FormControl className=" w-full">
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name={name}
              value={value}
              onChange={handleChange}
              className=" w-full flex flex-col gap-4"
            >
              <Box className=" w-full flex items-center">
                {options.map(item => (
                  <FormControlLabel
                    value={item?.value}
                    className=" text-sm"
                    control={<Radio />}
                    label={item?.label}
                    sx={{ '& .MuiTypography-root': { fontSize: '14px', color: '#a6a6a6', textWrap: 'nowrap' } }}
                  />
                ))}
              </Box>
            </RadioGroup>
          </FormControl>
        </Box>
      </Grid>
      {error && <Typography variant="error">{error}</Typography>}
    </Grid>
  );
}

FormikRadioButtons.propTypes = {
  name: propTypes.string.isRequired,
  label: propTypes.string,
  onChange: propTypes.func,
  options: propTypes.arrayOf(
    propTypes.shape({
      label: propTypes.string,
      value: propTypes.string,
    })
  ),
};

FormikRadioButtons.defaultProps = {
  label: null,
  options: [],
};

export default FormikRadioButtons;
