import * as yup from 'yup';

export const initialValues = {
  title: 'Mr',
  first_name: '',
  last_name: '',
  address: '',
  company: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const validationSchema = yup.object({
  title: yup.string().required('Required'),
  email: yup.string().trim().email('Invalid Email').required('Required'),
  password: yup
    .string()
    .required('Required')
    .min(8, 'Password must contain 8 character')
    .test(
      'isValidPass',
      'Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number or special',
      value => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumberSymbole = /[0-9]/.test(value) || /[!@#%&]/.test(value);
        if (hasUpperCase && hasLowerCase && hasNumberSymbole) {
          return true;
        }
        return false;
      }
    ),
  confirmPassword: yup
    .string()
    .required('Required')
    .min(8, 'Password must contain 8 character')
    .test(
      'isValidPass',
      'Password must contain 8 or more characters with at least one of each: uppercase, lowercase, number or special',
      value => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumberSymbole = /[0-9]/.test(value) || /[!@#%&]/.test(value);
        if (hasUpperCase && hasLowerCase && hasNumberSymbole) {
          return true;
        }
        return false;
      }
    ),
  first_name: yup.string().required('Required'),
  last_name: yup.string().required('Required'),
  address: yup.string().required('Required'),
  company: yup.string().required('Required'),
});
