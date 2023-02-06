import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { colors } from '../colors';
import { BoxCenter } from '../styledReusableComponents';
import { Box } from '@mui/material';

function LogoContainer() {
  const navigate = useNavigate();
  return (
    <BoxCenter sx={{ backgroundColor: colors.blue, padding: '15px 5px' }}>
      <Box onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
        <img
          src={logo}
          alt="Pegasus Cruises logo"
          width="150"
          id="pegasusLogo"
        />
      </Box>
    </BoxCenter>
  );
}

export default LogoContainer;
