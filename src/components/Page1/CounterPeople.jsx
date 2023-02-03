import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  getDiscounts,
  getPricing,
  getAvailability,
  getAges,
} from '../../api/pegasusApi';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Typography } from '@mui/material';
import { BoxCenter, BoxGap } from '../styledReusableComponents';
import { useBoundStore } from '../../store/store';
import dayjs from 'dayjs';
import ErrorMessage from '../ErrorMessage';
import LoadingMessage from '../LoadingMessage';

function CounterPeople(props) {
  const selectedDate = useBoundStore(state => state.selectedDate);
  const selectedCard = useBoundStore(state => state.selectedCard);

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
    enabled: !!selectedCard?.cruise_id,
  });

  const [peopleCounter, setPeopleCounter] = useState({
    adults: 0,
    children: 0,
    infants: 0,
  });

  const minusPerson = typeOfPerson => {
    switch (typeOfPerson) {
      case 'AD':
        if (peopleCounter.adults !== 0) {
          setPeopleCounter(prevPeopleCounter => {
            return {
              ...prevPeopleCounter,
              adults: prevPeopleCounter.adults - 1,
            };
          });
        }
        return;
      case 'CH':
        if (peopleCounter.children !== 0) {
          setPeopleCounter(prevPeopleCounter => {
            return {
              ...prevPeopleCounter,
              children: prevPeopleCounter.children - 1,
            };
          });
        }
        return;
      case 'IN':
        if (peopleCounter.infants !== 0) {
          setPeopleCounter(prevPeopleCounter => {
            return {
              ...prevPeopleCounter,
              infants: prevPeopleCounter.infants - 1,
            };
          });
        }
        return;
    }
  };

  const plusPerson = typeOfPerson => {
    switch (typeOfPerson) {
      case 'AD':
        setPeopleCounter(prevPeopleCounter => {
          return { ...prevPeopleCounter, adults: prevPeopleCounter.adults + 1 };
        });
        return;
      case 'CH':
        setPeopleCounter(prevPeopleCounter => {
          return {
            ...prevPeopleCounter,
            children: prevPeopleCounter.children + 1,
          };
        });
        return;
      case 'IN':
        setPeopleCounter(prevPeopleCounter => {
          return {
            ...prevPeopleCounter,
            infants: prevPeopleCounter.infants + 1,
          };
        });
        return;
    }
  };

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
    // console.log(ages.data);
    // console.log(availability.data);
    console.log(discounts.data);
    content = ages.data.map((a, index) => {
      return (
        <BoxCenter flexDirection="column" key={`PassengerType${index}`}>
          <Typography variant="subtitle1">
            {a.passengerType === 'AD'
              ? 'Adults'
              : a.passengerType === 'CH'
              ? 'Children'
              : 'Infants'}
          </Typography>
          <BoxCenter gap="10px">
            <RemoveIcon onClick={() => minusPerson(a.passengerType)} />
            {a.passengerType === 'AD'
              ? peopleCounter.adults
              : a.passengerType === 'CH'
              ? peopleCounter.children
              : peopleCounter.infants}
            <AddIcon onClick={() => plusPerson(a.passengerType)} />
          </BoxCenter>
          <Typography variant="subtitle1">€ 38.00</Typography>
        </BoxCenter>
      );
    });
  }

  return <BoxGap gap="30px">{content}</BoxGap>;
}

export default CounterPeople;
