import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useBoundStore } from '../../store/store';
import { styled } from '@mui/system';
import { colors } from '../colors';
import { BoxCenter } from '../styledReusableComponents';
import FinalPrice from '../Page1/FinalPrice';

const CustomCard = styled(Box)({
  border: `1px solid ${colors.blue}`,
  padding: '10px 20px',
});

export default function CostAnalyzer() {
  const { adultsPrice, childrenPrice, infantsPrice } = useBoundStore(
    state => state.selectedPeoplePrice
  );
  const finalPrice = useBoundStore(state => state.finalPrice);

  return (
    <CustomCard>
      <Grid container alignItems="center" sx={{ padding: '10px 50px' }}>
        <Grid item xs={12}>
          <Typography variant="h6">Ανάλυση Κόστους</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">Εισιτήρια Εκδρομης</Typography>
        </Grid>

        <Grid item xs={12} container sx={{ marginTop: '20px' }}>
          <Grid item xs={4}>
            Adults:
          </Grid>
          <Grid item xs={4}>
            x1
          </Grid>
          <Grid item xs={4}>
            $ {adultsPrice}
          </Grid>
        </Grid>
        <Grid item xs={4}>
          Children:
        </Grid>
        <Grid item xs={4}>
          x1
        </Grid>
        <Grid item xs={4}>
          $ {childrenPrice}
        </Grid>
        <Grid item xs={4}>
          Infants:
        </Grid>
        <Grid item xs={4}>
          x1
        </Grid>
        <Grid item xs={4}>
          $ {infantsPrice}
        </Grid>
        <Grid item xs={12} container sx={{ marginTop: '50px' }}>
          <Grid item xs={8}>
            <Typography variant="h6">Τελική τιμή:</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">$ {finalPrice}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </CustomCard>
  );
}
