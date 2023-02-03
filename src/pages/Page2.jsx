import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { string, object, array } from 'yup';
import { TextField, Typography, Autocomplete, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useQuery } from '@tanstack/react-query';
import { getCountries } from '../api/pegasusApi';
import { useTranslateStore } from '../store/translateStore';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useState } from 'react';
import { languageTypes } from '../store/translateReducer/translateReducer';
import ErrorMessage from '../components/ErrorMessage';
import LoadingMessage from '../components/LoadingMessage';

const arr = [1, 2, 3];

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
  phoneNumber: string().matches(
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
    `phone validation`
  ),
};

const schema = object({
  test: array().of(object().shape(formSchema)),
});

export default function Page2() {
  const selectedLanguage = useTranslateStore(state => state.selectedLanguage);
  const countries = useQuery(['countries'], getCountries);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  let temp = [];
  arr.forEach(_ => {
    temp.push('');
  });
  const [value, setValue] = useState(temp);

  const handleChange = (newValue, index) => {
    setValue(prev => {
      let newArr = [...prev];
      newArr[index] = newValue;
      return newArr;
    });
  };

  let formsContent;
  if (countries.isLoading) {
    formsContent = <LoadingMessage />;
  }
  if (countries.isError) {
    formsContent = <ErrorMessage message={countries.error.message} />;
  }
  if (countries.isSuccess) {
    let countriesData;
    switch (selectedLanguage) {
      case languageTypes.gr:
        countriesData = countries.data.map(country => {
          return { label: country.name_el };
        });
        break;
      case languageTypes.uk:
        countriesData = countries.data.map(country => {
          return { label: country.name_en };
        });
        break;
      case languageTypes.fr:
        countriesData = countries.data.map(country => {
          return { label: country.name_fr };
        });
        break;
      case languageTypes.pl:
        countriesData = countries.data.map(country => {
          return { label: country.name_en };
        });
        break;
      case languageTypes.it:
        countriesData = countries.data.map(country => {
          return { label: country.name_it };
        });
        break;
    }

    formsContent = (
      <form onSubmit={handleSubmit(onSubmit)}>
        {arr.map((_, index) => {
          return (
            <Grid container spacing={1} key={`field${index}`}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-required"
                  label="Όνομα"
                  {...register(`test.${index}.firstName`)}
                  sx={{ width: '100%' }}
                />
                {errors?.test?.[index]?.firstName?.message && (
                  <p>{errors?.test?.[index]?.firstName?.message}</p>
                )}
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="outlined-required"
                  label="Επώνυμο"
                  {...register(`test.${index}.lastName`)}
                  sx={{ width: '100%' }}
                />
                {errors?.test?.[index]?.lastName?.message && (
                  <p>{errors?.test?.[index]?.lastName?.message}</p>
                )}
              </Grid>

              <Grid item xs={6}>
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={countriesData}
                  sx={{ width: '100%' }}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="Εθνικότητα"
                      {...register(`test.${index}.nationality`)}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <MobileDatePicker
                    label="Date of Birth"
                    inputFormat="DD/MM/YYYY"
                    value={value[index] ? value[index] : null}
                    onChange={newValue => handleChange(newValue, index)}
                    renderInput={params => (
                      <TextField
                        {...params}
                        {...register(`test.${index}.dateOfBirth`)}
                        sx={{ width: '100%' }}
                      />
                    )}
                  />
                </LocalizationProvider>
                {errors?.test?.[index]?.nationality?.message && (
                  <p>{errors?.test?.[index]?.nationality?.message}</p>
                )}
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="outlined-required"
                  label="Email"
                  {...register(`test.${index}.email`)}
                  sx={{ width: '100%' }}
                />
                {errors?.test?.[index]?.email?.message && (
                  <p>{errors?.test?.[index]?.email?.message}</p>
                )}
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="outlined-required"
                  label="Τηλέφωνο"
                  {...register(`test.${index}.phoneNumber`)}
                  sx={{ width: '100%' }}
                />
                {errors?.test?.[index]?.phoneNumber?.message && (
                  <p>{errors?.test?.[index]?.phoneNumber?.message}</p>
                )}
              </Grid>
            </Grid>
          );
        })}

        <input type="submit" />
      </form>
    );
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={7}>
          {formsContent}
        </Grid>
        <Grid item xs={5}>
          <div>TODO</div>
        </Grid>
      </Grid>
    </Container>
  );
}
