import { BoxCenter } from './styledReusableComponents';
import { Typography } from '@mui/material';

export default function ErrorMessage({ message }) {
  const errorMsg = (
    <BoxCenter sx={{ flexDirection: 'column' }}>
      <Typography variant="body1">Oops!</Typography>
      <p>
        <Typography variant="body1">
          Sorry, an unexpected error has occured.
        </Typography>
      </p>
      <p>
        <Typography variant="h6">{message}</Typography>
      </p>
    </BoxCenter>
  );

  return <>{errorMsg}</>;
}
