import { useQuery } from '@tanstack/react-query';
import { getRouteAnalysis } from '../../api/pegasusApi';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import { Card, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { BoxCenter, BlackLayer, BoxGap } from '../styledReusableComponents';
import { useBoundStore } from '../../store/store';
import { useTranslateStore } from '../../store/translateStore';
import { styled } from '@mui/system';
import { colors } from '../colors';
import SailingIcon from '@mui/icons-material/Sailing';
import LoadingMessage from '../LoadingMessage';
import ErrorMessage from '../ErrorMessage';

//STYLES
const CustomCard = styled(Card, {
  shouldForwardProp: prop =>
    prop !== 'image' &&
    prop !== 'differenceInMinutes' &&
    prop !== 'isThisCardSelected',
})(({ theme, image, differenceInMinutes, isThisCardSelected }) => ({
  width: '100%',
  marginBottom: '40px',
  position: 'relative',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  cursor: `${differenceInMinutes < 1 ? 'auto' : 'pointer'}`,
  ': hover': {
    boxShadow: `${
      differenceInMinutes < 1
        ? '0 0 0 2px red'
        : `0 0 0 5px ${colors.yellow_light}`
    }`,
  },
  boxShadow: `${
    isThisCardSelected
      ? `0 0 0 5px ${colors.yellow}`
      : differenceInMinutes < 1
      ? '0 0 0 2px red'
      : '0 0 5px 1px rgba(0, 0, 0, 0.3)'
  }`,
  [theme.breakpoints.up('md')]: {
    height: '150px',
  },
  [theme.breakpoints.down('md')]: {
    height: '300px',
  },
}));

const TypographyZindex = styled(Typography)(({ color = '#fff' }) => ({
  zIndex: '20',
  color,
}));

const BoxPadding = styled('div')({
  padding: '10px 20px',
});

//END OF STYLES

function CardsWithRoutes() {
  const selectedRoute = useBoundStore(state => state.selectedRoute);
  const { cruise_id, descr, image, url } = selectedRoute[0];
  const selectedPort = useBoundStore(state => state.selectedPort);
  //TODO: BE CAREFUL LANGUAGE
  const port = selectedPort[0].gr;
  const selectedDate = useBoundStore(state => state.selectedDate);
  const displayedDate = dayjs(selectedDate).format('DD/MM/YYYY');
  const selectedCard = useBoundStore(state => state.selectedCard);
  const setSelectedCard = useBoundStore(state => state.setSelectedCard);
  const resetSelectedPeople = useBoundStore(state => state.resetSelectedPeople);

  const {
    apo,
    hmeromhniaEkdromis,
    wraAnaxwrhshs,
    epistrofh,
    plhrofories,
    monohmerh,
    polyhmerh,
    diathesimesTheseis,
    eksantlimenaEishthria,
    timh,
    elikse,
  } = useTranslateStore(state => state.cardsWithRoutes);

  const postRouteAnalysisObj = {
    cruise_id,
    date: dayjs(selectedDate).format('YYYY-MM-DD'),
  };

  const routeAnalysis = useQuery({
    queryKey: ['routeAnalysis', postRouteAnalysisObj],
    queryFn: () => getRouteAnalysis(postRouteAnalysisObj),
    enabled: selectedDate !== null,
  });

  const clickHandler = (
    arrivalTime,
    departureTime,
    analysis,
    vessel,
    differenceInMinutes,
    isThisCardSelected
  ) => {
    //If there is less than 1 minute, user cant select a ticket
    if (differenceInMinutes < 1) return;
    //If the card is already selected we diselect it
    if (isThisCardSelected) {
      setSelectedCard(null);
      resetSelectedPeople();
      return;
    }

    setSelectedCard({
      cruise_id,
      descr,
      image,
      url,
      selectedPort: selectedPort[0],
      departureDate: displayedDate,
      arrivalTime,
      departureTime,
      analysis,
      vessel,
    });
  };

  let content;
  if (routeAnalysis.isLoading) {
    content = <LoadingMessage />;
  }
  if (routeAnalysis.isError) {
    content = <ErrorMessage message={routeAnalysis.error.message} />;
  }
  if (routeAnalysis.isSuccess) {
    content = routeAnalysis.data.map(el => {
      const {
        arrivalTime,
        departureTime,
        routeAnalysis: analysis,
        vessel,
      } = el;
      const day = dayjs(selectedDate).get('date');
      const month = dayjs(selectedDate).get('month');
      const year = dayjs(selectedDate).get('year');
      const cardDate = dayjs(
        new Date(year, month, day, departureTime.slice(0, 2))
      );
      //Difference in minutes until a trip
      const differenceInMinutes = cardDate.diff(dayjs(), 'minute');
      const isThisCardSelected = arrivalTime === selectedCard?.arrivalTime;

      return (
        <BoxCenter
          key={JSON.stringify(el)}
          onClick={() =>
            clickHandler(
              arrivalTime,
              departureTime,
              analysis,
              vessel,
              differenceInMinutes,
              isThisCardSelected
            )
          }
        >
          <CustomCard
            square
            image={image}
            differenceInMinutes={differenceInMinutes}
            isThisCardSelected={isThisCardSelected}
          >
            <BlackLayer>
              <BoxPadding>
                <Grid container rowSpacing={3} alignItems="center">
                  <Grid xs={12} md={6}>
                    <TypographyZindex variant="h6">
                      {descr.toUpperCase()} {apo} {port.toUpperCase()}
                    </TypographyZindex>
                  </Grid>
                  <Grid xs={12} md={3}>
                    {differenceInMinutes < 1 && (
                      <Typography variant="h6" sx={{ color: colors.yellow }}>
                        {elikse}
                      </Typography>
                    )}
                  </Grid>
                  <Grid xs={12} md={3}>
                    <TypographyZindex variant="subtitle2">
                      {monohmerh}
                    </TypographyZindex>
                  </Grid>

                  <Grid xs={12}>
                    <TypographyZindex variant="body2">
                      {hmeromhniaEkdromis}: {displayedDate}
                    </TypographyZindex>
                  </Grid>
                  <Grid xs={12} md={6}>
                    <TypographyZindex variant="body2">
                      {wraAnaxwrhshs}: {departureTime} - {arrivalTime}
                    </TypographyZindex>
                  </Grid>
                  <Grid xs={12} md={3}>
                    <TypographyZindex variant="body1" color={colors.yellow}>
                      <Link href={url} color="inherit">
                        {plhrofories}
                      </Link>
                    </TypographyZindex>
                  </Grid>
                  <Grid xs={12} md={3}>
                    <BoxGap gap="7px">
                      <SailingIcon sx={{ color: colors.yellow }} />
                      <TypographyZindex variant="body2">
                        {vessel}
                      </TypographyZindex>
                    </BoxGap>
                  </Grid>
                </Grid>
              </BoxPadding>
            </BlackLayer>
          </CustomCard>
        </BoxCenter>
      );
    });
  }

  return <div>{content}</div>;
}

export default CardsWithRoutes;
