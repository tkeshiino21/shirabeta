import * as Yup from 'yup';

export const signUpValidation = Yup.object({
  name: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  password: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .min(8, 'Must be 8 characters or more')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
});

export const logInValidation = Yup.object({
  password: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .min(8, 'Must be 8 characters or more')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
});
