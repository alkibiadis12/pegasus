import { Typography, Box, Container, Link } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { styled } from '@mui/system';
import { useBoundStore } from '../store/store';
import {
  BoxCenter,
  BoxGapFlexStart,
} from '../components/styledReusableComponents';
import { colors } from '../components/colors';
import { Navigate } from 'react-router-dom';

const BoxCyrcle = styled(Box)({
  backgroundColor: colors.yellow,
  height: '70px',
  width: '70px',
  padding: '30px',
  borderRadius: '1000%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid black',
});

function Page3() {
  const selectedCard = useBoundStore(state => state.selectedCard);
  const { adults, children, infants } = useBoundStore(
    state => state.selectedPeople
  );
  const totalPeople = adults + children + infants;
  const usersInformation = useBoundStore(state => state.usersInformation);

  console.log(selectedCard);

  return (
    <Container maxWidth="xl">
      {usersInformation.length === 0 && <Navigate to="/" />}
      <BoxCenter sx={{ marginBottom: '50px' }}>
        <Typography variant="h4">ΕΥΧΑΡΙΣΤΟΥΜΕ ΓΙΑ ΤΗΝ ΠΡΟΤΙΜΗΣΗ ΣΑΣ</Typography>
      </BoxCenter>
      <Grid container>
        <Grid
          item
          container
          xs={6}
          sx={{ padding: '15px', border: `1px solid ${colors.yellow}` }}
        >
          <Grid
            item
            xs={12}
            sx={{ paddingBottom: '5px', borderBottom: '1px solid black' }}
          >
            <BoxCenter>
              <Typography variant="body1">Εισιτήριο Εκδρομής</Typography>
            </BoxCenter>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            sx={{ marginTop: '10px' }}
          >
            <Grid item xs={6}>
              <Typography variant="subtitle1">ΟΝΟΜΑΤΕΠΩΝΥΜΟ:</Typography>
              <Typography variant="subtitle2">
                {usersInformation[0]?.firstName} {usersInformation[0]?.lastName}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle1"> ΚΑΡΑΒΙ:</Typography>
              <Typography variant="subtitle2">
                {selectedCard?.vessel}
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle1"> Α. ΚΡΑΤΗΣΗΣ:</Typography>
              <Typography variant="subtitle2">64984651</Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            sx={{ marginTop: '20px' }}
          >
            <Grid item xs={6}>
              <Typography variant="subtitle1">
                ΑΠΟ: <strong>{selectedCard?.selectedPort.gr}</strong>
              </Typography>
              <Typography variant="subtitle1">
                ΠΡΟΣ: <strong>{selectedCard?.descr}</strong>
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography variant="subtitle1"> ΗΜΕΡΟΜΗΝΙΑ:</Typography>
              <Typography variant="subtitle2">
                {selectedCard?.departureDate}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            justifyContent="center"
            sx={{
              marginTop: '20px',
              paddingTop: '20px',
              borderTop: '1px solid black',
            }}
          >
            <Grid item xs={6}>
              <BoxCenter flexDirection="column">
                <Typography variant="subtitle1" sx={{ color: colors.blue }}>
                  ΑΡΙΘΜΟΣ
                </Typography>
                <Typography variant="subtitle1" sx={{ color: colors.blue }}>
                  ΑΤΟΜΩΝ
                </Typography>
                <Typography variant="h6" sx={{ color: colors.yellow }}>
                  {totalPeople}
                </Typography>
              </BoxCenter>
            </Grid>
            <Grid item xs={6}>
              <BoxCenter flexDirection="column">
                <Typography variant="subtitle1" sx={{ color: colors.blue }}>
                  ΩΡΑ
                </Typography>
                <Typography variant="subtitle1" sx={{ color: colors.blue }}>
                  ΑΝΑΧΩΡΗΣΗΣ
                </Typography>
                <Typography variant="h6" sx={{ color: colors.yellow }}>
                  {selectedCard?.departureTime}
                </Typography>
              </BoxCenter>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container xs={6} sx={{ paddingLeft: '50px' }}>
          <BoxGapFlexStart gap="10px" sx={{ flexDirection: 'column' }}>
            {selectedCard?.analysis.map(r => {
              return (
                <BoxCenter gap="20px" key={JSON.stringify(r)}>
                  <BoxCyrcle>
                    <Typography variant="h6">{r.departureTime}</Typography>
                  </BoxCyrcle>
                  <Typography variant="h6">
                    {' '}
                    ΑΝΑΧΩΡΗΣΗ ΑΠΟ {r.origin}
                  </Typography>
                </BoxCenter>
              );
            })}
            <BoxCenter gap="20px">
              <BoxCyrcle>
                <Typography variant="h6">
                  {selectedCard?.arrivalTime}
                </Typography>
              </BoxCyrcle>
              <Typography variant="h6">
                {' '}
                ΕΠΙΣΤΡΟΦΗ {selectedCard?.selectedPort.gr}
              </Typography>
            </BoxCenter>
          </BoxGapFlexStart>
        </Grid>
      </Grid>
      <BoxCenter sx={{ marginTop: '70px' }}>
        <Typography variant="h6">
          <Link href={selectedCard?.url}>Περισσότερες Πληροφορίες</Link>
        </Typography>
      </BoxCenter>
    </Container>
  );
}

export default Page3;
