import { styled, TextField } from '@mui/material';

const FormikStyledTextField = styled(TextField)(() => ({
  '& .MuiInputBase-root': {

    '& .MuiInputBase-input': {
      padding: '12px 14px',
      fontSize: '14px'
    },

    '& fieldset': {
      // border: 'none !important',
      borderTop: 'none !important',
      borderLeft: 'none !important',
      borderRight: 'none !important',
      borderRadius: '0px !important',
    },
  },
}));

export default FormikStyledTextField;
