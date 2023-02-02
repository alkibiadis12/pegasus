import { useLanguageStore } from '../store/translateStore';
import * as yup from 'yup';

export const createSchema = index => {
  const {
    validationFirstNameMin,
    validationFirstNameMatch,
    validationLastNameMin,
    validationLastNameMatch,
    emailValidation,
    phoneValidation,
  } = useLanguageStore(state => state.schema);
  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
  return {
    [`firstName${index}`]: yup
      .string()
      .min(2, `${validationFirstNameMin}`)
      .matches(
        /^[A-Za-z\u0370-\u03FF\u1F00-\u1FFF]*$/,
        `${validationFirstNameMatch}`
      )
      .max(40),
    [`lastName${index}`]: yup
      .string()
      .min(2, `${validationLastNameMin}`)
      .matches(
        /^[A-Za-z\u0370-\u03FF\u1F00-\u1FFF]*$/,
        `${validationLastNameMatch}`
      )
      .max(40),
    [`email${index}`]: yup.string().email(`${emailValidation}`),
    [`phoneNumber${index}`]: yup
      .string()
      .matches(phoneRegExp, `${phoneValidation}`),
  };
};
