import React from 'react';
import { useRouteError } from 'react-router-dom';
import { BoxCenter } from '../components/styledReusableComponents';
import { Typography } from '@mui/material';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <BoxCenter sx={{ flexDirection: 'column' }}>
      <Typography variant="body1">Oops!</Typography>
      <p>
        <Typography variant="body1">
          Sorry, an unexpected error has occured.
        </Typography>
      </p>
      <p>
        <Typography variant="h6">
          {error.statusText || error.message}
        </Typography>
      </p>
    </BoxCenter>
  );
}

export default ErrorPage;
