import * as yup from 'yup';

export const SignInSchema = yup
  .object({
    email: yup.string().email('Kindly provide a valid email address').required('Email is required'),
    password: yup.string().required('password is required').min(6, 'Password must be atleast 6 character long')
  })
  .required();

export const SignUpSchema = yup
  .object({
    email: yup.string().email('Kindly provide a valid email address').required('Email is required'),
    password: yup.string().required('password is required').min(6, 'Password should be of minimum 6 characters length'),
    confirmPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], "Password's not match"),
    acceptTerms: yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
    agreeContact: yup.boolean()
  })
  .required();

export const ForgotPasswordSchema = yup
  .object({
    email: yup.string().email('Kindly provide a valid email address').required('Email address is required')
  })
  .required();

export const profileSchema = yup
  .object({
    fullName: yup
      .string()
      .required('Full name is required')
      .min(4, 'Mininum 4 characters')
      .max(40, 'Maximum 30 characters'),
    email: yup.string().email('Kindly provide a valid email address').required('Email is required'),
    phone: yup
      .string()
      .required('Phone number is required')
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        'Phone number is not valid'
      )
      .min(11, 'Mininum of 11 numbers '),

    oldPassword: yup.string().required('Old Password is required'),
    password: yup.string().required('password is required').min(6, 'Password should be of minimum 6 characters length'),
    confirmPassword: yup
      .string()
      .required('Confirm password is required')
      .oneOf([yup.ref('password')], "Password's not match")
  })
  .required();
