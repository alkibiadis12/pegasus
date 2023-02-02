import { useQuery } from '@tanstack/react-query';
import {
  getDiscounts,
  getPricing,
  getAvailability,
  getRouteAnalysis,
  getRoutes,
  getPorts,
} from '../../api/pegasusApi';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import CircularProgress from '@mui/material/CircularProgress';
import { Card, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { BoxCenter, BlackLayer, BoxGap } from '../styledReusableComponents';
import { useBoundStore } from '../../store/store';
import { useLanguageStore } from '../../store/translateStore';
import { styled } from '@mui/system';
import { colors } from '../colors';
import SailingIcon from '@mui/icons-material/Sailing';

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
  } = useLanguageStore(state => state.cardsWithRoutes);

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
    content = (
      <BoxCenter>
        <CircularProgress />
      </BoxCenter>
    );
  }
  if (routeAnalysis.isError) {
    content = (
      <BoxCenter sx={{ flexDirection: 'column' }}>
        <Typography variant="body1">Oops!</Typography>
        <p>
          <Typography variant="body1">
            Sorry, an unexpected error has occured.
          </Typography>
        </p>
        <p>
          <Typography variant="h6">{routeAnalysis.error.message}</Typography>
        </p>
      </BoxCenter>
    );
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
          key={uuidv4()}
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
                <Grid container rowSpacing={2.5}>
                  <Grid xs={12} md={8}>
                    <TypographyZindex variant="h6">
                      {descr.toUpperCase()} {apo} {port.toUpperCase()}
                    </TypographyZindex>
                  </Grid>
                  <Grid xs={12} md={4}>
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
                    <BoxGap>
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
