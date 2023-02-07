import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  TextField,
  Typography,
  Autocomplete,
  Container,
  Button,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useQuery } from '@tanstack/react-query';
import { getCountries } from '../api/pegasusApi';
import { useTranslateStore } from '../store/translateStore';
import { useBoundStore } from '../store/store';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { useState } from 'react';
import { languageTypes } from '../store/translateReducer/translateReducer';
import ErrorMessage from '../components/ErrorMessage';
import LoadingMessage from '../components/LoadingMessage';
import { schema } from '../schema/page2schema';
import { Navigate, useNavigate } from 'react-router-dom';
import { colors } from '../components/colors';
import { styled } from '@mui/system';
import CostAnalyzer from '../components/Page2/CostAnalyzer';
import { BoxCenter } from '../components/styledReusableComponents';

const PaymentButton = styled(Button)({
  padding: '10px 50px',
  backgroundColor: colors.yellow,
  color: '#000',
  ':hover': {
    backgroundColor: colors.yellow_dark,
    color: colors.black_light,
  },
});

const textFieldStyle = {
  width: '100%',
  backgroundColor: colors.light_gray2,
  color: colors.light_gray1,
};

export default function Page2() {
  const { adults, children, infants } = useBoundStore(
    state => state.selectedPeople
  );
  const totalPeople = adults + children + infants;
  //ARR IS USED TO RENDER INPUTS BASED ON TOTAL PEOPLE
  let arr = [];
  for (let i = 0; i < totalPeople; i++) arr.push('');
  const [value, setValue] = useState(arr);

  const setSelectedUsersInformation = useBoundStore(
    state => state.setSelectedUsersInformation
  );

  const { stoixeiaEpivatwn, epivatis } = useTranslateStore(
    state => state.page2
  );
  const selectedLanguage = useTranslateStore(state => state.selectedLanguage);
  //GETTING COUNTRIES DATA
  const countries = useQuery(['countries'], getCountries);

  //USING SCHEMA, HOOK FORMS AND YUP
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //SAVE PEOPLE DATA AND NAVIGATE ON SUBMIT
  const navigate = useNavigate();
  const onSubmit = data => {
    console.log(data);
    if (data?.arrayOfUserInfo.length > 1) {
      setSelectedUsersInformation(data.arrayOfUserInfo);
      navigate('/ekdosh-eisithriwn');
    }
  };

  //FOR DATE PICKER
  const handleChange = (newValue, index) => {
    setValue(prev => {
      let newArr = [...prev];
      newArr[index] = newValue;
      return newArr;
    });
  };

  //CONDITIONAL RENDERING
  let formsContent;
  if (countries.isLoading) {
    formsContent = <LoadingMessage />;
  }
  if (countries.isError) {
    formsContent = <ErrorMessage message={countries.error.message} />;
  }
  if (countries.isSuccess) {
    //COUNTRIES DATA FILTERED BY SELECTED LANGUAGE
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
      <>
        {arr.map((_, index) => {
          return (
            <Grid
              container
              rowSpacing={2}
              columnSpacing={5}
              key={`field${index}`}
              sx={{ marginBottom: '30px' }}
            >
              <Grid item xs={12}>
                <BoxCenter sx={{ marginBottom: '10px' }}>
                  <Typography variant="body2">
                    {index === 0
                      ? `Leader ${epivatis}`
                      : `${epivatis} ${index}`}
                  </Typography>
                </BoxCenter>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined-required"
                  label="Όνομα"
                  {...register(`arrayOfUserInfo.${index}.firstName`)}
                  sx={textFieldStyle}
                  required
                />
                {errors?.arrayOfUserInfo?.[index]?.firstName?.message && (
                  <p>{errors?.arrayOfUserInfo?.[index]?.firstName?.message}</p>
                )}
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="outlined-required"
                  label="Επώνυμο"
                  {...register(`arrayOfUserInfo.${index}.lastName`)}
                  sx={textFieldStyle}
                  required
                />
                {errors?.arrayOfUserInfo?.[index]?.lastName?.message && (
                  <p>{errors?.arrayOfUserInfo?.[index]?.lastName?.message}</p>
                )}
              </Grid>

              <Grid item xs={6}>
                <Autocomplete
                  disablePortal
                  isOptionEqualToValue={(option, value) =>
                    option.value === value.value
                  }
                  id="combo-box-demo"
                  options={countriesData}
                  sx={textFieldStyle}
                  renderInput={params => (
                    <TextField
                      {...params}
                      label="Εθνικότητα"
                      required
                      {...register(`arrayOfUserInfo.${index}.nationality`)}
                    />
                  )}
                />
                {errors?.arrayOfUserInfo?.[index]?.nationality?.message && (
                  <p>
                    {errors?.arrayOfUserInfo?.[index]?.nationality?.message}
                  </p>
                )}
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
                        {...register(`arrayOfUserInfo.${index}.dateOfBirth`)}
                        sx={textFieldStyle}
                        required
                      />
                    )}
                  />
                </LocalizationProvider>
                {errors?.arrayOfUserInfo?.[index]?.dateOfBirth?.message && (
                  <p>
                    {errors?.arrayOfUserInfo?.[index]?.dateOfBirth?.message}
                  </p>
                )}
              </Grid>

              <Grid item xs={6}>
                <TextField
                  id="outlined-required"
                  label="Email"
                  {...register(`arrayOfUserInfo.${index}.email`)}
                  sx={textFieldStyle}
                  required={index === 0 ? true : false}
                />
                {errors?.arrayOfUserInfo?.[index]?.email?.message && (
                  <p>{errors?.arrayOfUserInfo?.[index]?.email?.message}</p>
                )}
              </Grid>

              <Grid item xs={6}>
                <TextField
                  inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                  id="outlined-required"
                  label="Τηλέφωνο"
                  {...register(`arrayOfUserInfo.${index}.phoneNumber`)}
                  sx={textFieldStyle}
                  required={index === 0 ? true : false}
                />
                {errors?.arrayOfUserInfo?.[index]?.phoneNumber?.message && (
                  <p>
                    {errors?.arrayOfUserInfo?.[index]?.phoneNumber?.message}
                  </p>
                )}
              </Grid>
            </Grid>
          );
        })}
      </>
    );
  }

  return (
    <Container maxWidth="xl">
      {adults < 1 && <Navigate to="/" />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1} columnSpacing={8}>
          <Grid item xs={12} md={7}>
            <BoxCenter sx={{ marginBottom: '30px' }}>
              <Typography variant="h4">{stoixeiaEpivatwn}</Typography>
            </BoxCenter>
            {formsContent}
          </Grid>
          <Grid item container xs={12} md={5} sx={{ marginTop: '70px' }}>
            <Grid item xs={12}>
              <CostAnalyzer />
            </Grid>
            <Grid item xs={12}>
              <BoxCenter>
                <PaymentButton type="submit">ΠΛΗΡΩΜΗ</PaymentButton>
              </BoxCenter>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
