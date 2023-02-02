import { CssBaseline, Box } from '@mui/material';
import Flags from '../components/Root/Flags';
import LogoContainer from '../components/Root/LogoContainer';
import { colors } from '../components/colors';
import { BoxSBnoBP } from '../components/styledReusableComponents';
import Breadcrumb from '../components/Root/Breadcrumb';
import { Outlet } from 'react-router-dom';

function Root(props) {
  return (
    <div>
      <CssBaseline />
      <BoxSBnoBP sx={{ backgroundColor: colors.yellow, padding: '5px 10px' }}>
        <Flags />
      </BoxSBnoBP>
      <LogoContainer />
      <Breadcrumb />
      <Box sx={{ marginTop: '30px' }}>
        <Outlet />
      </Box>
    </div>
  );
}

export default Root;
