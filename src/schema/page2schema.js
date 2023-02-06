import { string, object, array } from 'yup';

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const formSchema = {
  firstName: string()
    .min(2, 'firstname min ')
    .matches(/^[A-Za-zΑ-Ωα-ω]*$/, `firstname match`)
    .max(40)
    .required('Required'),
  lastName: string()
    .min(2, 'lastname min ')
    .matches(/^[A-Za-zΑ-Ωα-ω ]*$/, `lastName match`)
    .max(40)
    .required('Required'),
  email: string().email(`email validation`),
  nationality: string().required('Required'),
  dateOfBirth: string().required('Required'),
  phoneNumber: string()
    .notRequired()
    .when('phoneNumber', {
      is: value => value?.length,
      then: rule => rule.matches(phoneRegExp, `phone validation`),
    }),
};

export const schema = object({
  arrayOfUserInfo: array().of(
    object().shape(formSchema, ['phoneNumber', 'phoneNumber'])
  ),
});
