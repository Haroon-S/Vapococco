import * as yup from 'yup';

export const initialValues = {
  email: '',
  password: '',
  username: '',
  title: 'Mr',
  first_name: '',
  last_name: '',
  company: '',
  phone: '',
  country: '',
  siret: '',
  vat: '',
  image: '',
};

export const validationSchema = yup.object({
  title: yup
    .string()
    .trim()
    .test('isValidPass', 'username does not contain spaces', value => {
      const usernameRegex = /^[a-za-zA-Z0-9_.]+$/.test(value);
      if (usernameRegex) {
        return true;
      }
      return false;
    })
    .required('Required'),
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
  first_name: yup.string().required('Required'),
  last_name: yup.string().required('Required'),
  company: yup.string().required('Required'),
  phone: yup.string().required('Required'),
  country: yup.string().required('Required'),
  siret: yup.string().required('Required'),
  vat: yup.string().required('Required'),
});
