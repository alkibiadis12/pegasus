import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link, useLocation } from 'react-router-dom';
import { BoxCenter } from '../styledReusableComponents';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { colors } from '../colors';

const LinkRouterCustom = styled(Link)(({ location, to }) => ({
  textDecoration: 'none',
  ':link': {
    color: `${location === to ? colors.blue_light : colors.yellow}`,
  },
  ':visited': {
    color: `${location === to ? colors.blue_light : colors.yellow}`,
  },
  ':hover': {
    color: `${location === to ? colors.blue_light2 : colors.yellow_light}`,
  },
  ':active': {
    color: `${location === to ? colors.blue_light2 : colors.yellow_light}`,
  },
}));

function Breadcrumb() {
  const { pathname: location } = useLocation();
  return (
    <BoxCenter
      gap="20px"
      sx={{ backgroundColor: colors.dark_gray, padding: '10px 50px' }}
    >
      <LinkRouterCustom to={'/'} location={location}>
        <Typography variant="h6">Επιλογή Εκδρομής</Typography>
      </LinkRouterCustom>
      <ChevronRightIcon sx={{ fontSize: '30px', color: colors.dark_gray2 }} />
      <LinkRouterCustom to={'/stoixeia-epivatwn'} location={location}>
        <Typography variant="h6">Στοιχεία Επιβατών</Typography>
      </LinkRouterCustom>
      <ChevronRightIcon sx={{ fontSize: '30px', color: colors.dark_gray2 }} />
      <LinkRouterCustom to={'/ekdosh-eisithriwn'} location={location}>
        <Typography variant="h6">Έκδοση Εισιτηρίων</Typography>
      </LinkRouterCustom>
    </BoxCenter>
  );
}

export default Breadcrumb;
