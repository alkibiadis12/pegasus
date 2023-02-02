import logo from '../../assets/logo.png';
import { colors } from '../colors';
import { BoxCenter } from '../styledReusableComponents';

function LogoContainer() {
  return (
    <BoxCenter sx={{ backgroundColor: colors.blue, padding: '15px 5px' }}>
      <img src={logo} alt="Pegasus Cruises logo" width="150" id="pegasusLogo" />
    </BoxCenter>
  );
}

export default LogoContainer;
