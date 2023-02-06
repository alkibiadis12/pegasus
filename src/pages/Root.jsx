import { CssBaseline, Box } from '@mui/material';
import Flags from '../components/Root/Flags';
import LogoContainer from '../components/Root/LogoContainer';
import { colors } from '../components/colors';
import { BoxSBnoBP } from '../components/styledReusableComponents';
import Breadcrumb from '../components/Root/Breadcrumb';
import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import CardInPage2 from '../components/Root/CardInPage2';

function Root() {
  const location = useLocation();
  return (
    <div>
      <CssBaseline />
      <BoxSBnoBP sx={{ backgroundColor: colors.yellow, padding: '5px 10px' }}>
        <Flags />
      </BoxSBnoBP>
      <LogoContainer />
      {location.pathname === '/stoixeia-epivatwn' && <CardInPage2 />}
      <Breadcrumb />
      <Box sx={{ marginTop: '30px' }}>
        <Outlet />
      </Box>
    </div>
  );
}

export default Root;
