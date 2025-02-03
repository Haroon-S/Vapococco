import * as Yup from 'yup';

export const checkoutInitValues = {
  billing_first_name: '',
  billing_last_name: '',
  billing_email: '',
  billing_phone: '',
  billing_address: '',
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  shipping_address: '',
};

export const checkoutFormValSchema = Yup.object({
  billing_first_name: Yup.string().required('Required!'),
  billing_last_name: Yup.string().required('Required!'),
  billing_email: Yup.string().required('Required!'),
  billing_phone: Yup.string().required('Required!'),
  billing_address: Yup.string().required('Required!'),
  first_name: Yup.string().required('Required!'),
  last_name: Yup.string().required('Required!'),
  email: Yup.string().required('Required!'),
  phone: Yup.string().required('Required!'),
  shipping_address: Yup.string().required('Required!'),
});
