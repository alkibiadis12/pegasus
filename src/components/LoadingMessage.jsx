import CircularProgress from '@mui/material/CircularProgress';
import { BoxCenter } from './styledReusableComponents';

function LoadingMessage(props) {
  return (
    <BoxCenter>
      <CircularProgress />
    </BoxCenter>
  );
}

export default LoadingMessage;
