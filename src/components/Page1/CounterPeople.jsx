import { useQuery } from '@tanstack/react-query';
import { getDiscounts, getAvailability, getAges } from '../../api/pegasusApi';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import { BoxCenter, BoxGap } from '../styledReusableComponents';
import { useBoundStore } from '../../store/store';
import dayjs from 'dayjs';
import ErrorMessage from '../ErrorMessage';
import LoadingMessage from '../LoadingMessage';
import { colors } from '../colors';
import { useEffect } from 'react';

function CounterPeople() {
  const selectedDate = useBoundStore(state => state.selectedDate);
  const selectedCard = useBoundStore(state => state.selectedCard);
  const selectedPeople = useBoundStore(state => state.selectedPeople);
  const setSelectedPeople = useBoundStore(state => state.setSelectedPeople);
  const setSelectedPeoplePrice = useBoundStore(
    state => state.setSelectedPeoplePrice
  );

  const postAvailabilityObj = {
    cruise_id: selectedCard.cruise_id * 1,
    date: dayjs(selectedDate).format('YYYY-MM-DD'),
    time: selectedCard.departureTime,
  };

  const postDiscountsObj = {
    ...postAvailabilityObj,
    vessel: selectedCard.vessel,
  };

  const ages = useQuery(['routes'], getAges);
  const availability = useQuery({
    queryKey: ['availability', postAvailabilityObj],
    queryFn: () => getAvailability(postAvailabilityObj),
    enabled: !!selectedCard?.cruise_id,
  });
  const discounts = useQuery({
    queryKey: ['discounts', postDiscountsObj],
    queryFn: () => getDiscounts(postDiscountsObj),
    enabled: !!ages,
  });

  let content;
  if (ages.isLoading || availability.isLoading || discounts.isLoading) {
    content = <LoadingMessage />;
  }

  if (ages.isError) {
    content = <ErrorMessage message={ages.error.message} />;
  }
  if (availability.isError) {
    content = <ErrorMessage message={availability.error.message} />;
  }
  if (discounts.isError) {
    content = <ErrorMessage message={discounts.error.message} />;
  }

  if (ages.isSuccess && availability.isSuccess && discounts.isSuccess) {
    setSelectedPeoplePrice({
      typeOfPerson: 'AD',
      newPrice: Math.round((discounts.data[0].price * 100) / 100).toFixed(2),
    });
    setSelectedPeoplePrice({
      typeOfPerson: 'CH',
      newPrice: Math.round((discounts.data[1].price * 100) / 100).toFixed(2),
    });
    setSelectedPeoplePrice({
      typeOfPerson: 'IN',
      newPrice: Math.round((discounts.data[2].price * 100) / 100).toFixed(2),
    });

    content = ages.data.map(a => {
      return (
        <BoxCenter flexDirection="column" gap="5px" key={JSON.stringify(a)}>
          <Typography variant="subtitle1">
            {a.passengerType === 'AD'
              ? 'Adults'
              : a.passengerType === 'CH'
              ? 'Children'
              : 'Infants'}
          </Typography>
          <BoxCenter
            gap="20px"
            sx={{
              backgroundColor: '#fff',
              padding: '5px 10px',
              border: `1px solid ${colors.yellow}`,
            }}
          >
            <RemoveIcon
              sx={{ cursor: 'pointer' }}
              onClick={() =>
                setSelectedPeople({ typeOfPerson: a.passengerType, by: -1 })
              }
            />

            <Typography variant="h5">
              {a.passengerType === 'AD'
                ? selectedPeople.adults
                : a.passengerType === 'CH'
                ? selectedPeople.children
                : selectedPeople.infants}
            </Typography>
            <AddIcon
              sx={{ cursor: 'pointer' }}
              onClick={() =>
                setSelectedPeople({ typeOfPerson: a.passengerType, by: 1 })
              }
            />
          </BoxCenter>
          <Typography variant="subtitle1">
            {a.passengerType === 'AD'
              ? `€${Math.round((discounts.data[0].price * 100) / 100).toFixed(
                  2
                )}`
              : a.passengerType === 'CH'
              ? `€${Math.round((discounts.data[1].price * 100) / 100).toFixed(
                  2
                )}`
              : `€${Math.round((discounts.data[2].price * 100) / 100).toFixed(
                  2
                )}`}
          </Typography>
        </BoxCenter>
      );
    });
  }

  return <BoxGap gap="80px">{content}</BoxGap>;
}

export default CounterPeople;
