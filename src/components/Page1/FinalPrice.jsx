import { useQuery } from '@tanstack/react-query';
import { getPricing } from '../../api/pegasusApi';
import { useBoundStore } from '../../store/store';
import ErrorMessage from '../ErrorMessage';
import LoadingMessage from '../LoadingMessage';
import dayjs from 'dayjs';
import { BoxCenter } from '../styledReusableComponents';
import { Typography } from '@mui/material';
import { useTranslateStore } from '../../store/translateStore';

export default function FinalPrice() {
  const selectedDate = useBoundStore(state => state.selectedDate);
  const selectedCard = useBoundStore(state => state.selectedCard);
  const selectedPeople = useBoundStore(state => state.selectedPeople);
  const setFinalPrice = useBoundStore(state => state.setFinalPrice);
  const { telikhTimh } = useTranslateStore(state => state.pricingPopUp);

  const pushPassengers = (people, type) => {
    for (let i = 0; i < people; i++) {
      passengers.push({
        passengerClass: 1,
        passengerType: type,
      });
    }
  };

  const passengers = [];
  pushPassengers(selectedPeople.adults, 'AD');
  pushPassengers(selectedPeople.children, 'CH');
  pushPassengers(selectedPeople.infants, 'IN');

  const postPricingObj = {
    cruise_id: selectedCard.cruise_id * 1,
    date: dayjs(selectedDate).format('YYYY-MM-DD'),
    time: selectedCard.departureTime,
    passengers,
    vessel: selectedCard.vessel,
  };

  const pricing = useQuery({
    queryKey: ['pricing', postPricingObj],
    queryFn: () => getPricing(postPricingObj),
    enabled: passengers.length === 2,
  });

  let content;
  if (pricing.isLoading) {
    content = <LoadingMessage />;
  }

  if (passengers.length === 0) {
    content = (
      <BoxCenter gap="5px" flexDirection="column">
        <Typography variant="h6">{telikhTimh}</Typography>
        <Typography variant="h6">€{'0.00'}</Typography>
      </BoxCenter>
    );
  }

  if (pricing.isError) {
    content = <ErrorMessage message={pricing.error.message} />;
  }
  if (pricing.isSuccess) {
    let finalPrice = 0;
    pricing.data.forEach(d => {
      finalPrice += d.price * 1;
    });
    setFinalPrice(Math.round((finalPrice * 100) / 100).toFixed(2));
    content = (
      <BoxCenter gap="5px" flexDirection="column">
        <Typography variant="h6">{telikhTimh}</Typography>
        <Typography variant="h6">
          €{Math.round((finalPrice * 100) / 100).toFixed(2)}
        </Typography>
      </BoxCenter>
    );
  }

  return <div>{content}</div>;
}
