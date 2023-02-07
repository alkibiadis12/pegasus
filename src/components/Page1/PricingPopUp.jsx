import React from 'react';
import { colors } from '../colors';
import { styled } from '@mui/system';
import { BoxFlexSB } from '../styledReusableComponents';
import CounterPeople from './CounterPeople';
import FinalPrice from './FinalPrice';
import { Link } from 'react-router-dom';
import { useBoundStore } from '../../store/store';
import { Typography } from '@mui/material';
import { useTranslateStore } from '../../store/translateStore';

const NextStep = styled(Link)(({ totalpeople }) => ({
  textDecoration: 'none',
  cursor: `${totalpeople === 0 ? 'auto' : 'pointer'}`,
  padding: '10px 25px',
  backgroundColor: colors.yellow,
  color: '#000',
  border: '1px solid #000',
  ':hover': {
    backgroundColor: `${
      totalpeople === 0 ? colors.yellow : colors.yellow_light
    }`,
    color: `${totalpeople === 0 ? '#000' : colors.dark_gray2}`,
    borderColor: `${totalpeople === 0 ? '#000' : colors.dark_gray2}`,
  },
}));

const BoxFixed = styled('div')({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '150px',
  backgroundColor: colors.light_gray2,
});

function PricingPopUp(props) {
  const { adults, children, infants } = useBoundStore(
    state => state.selectedPeople
  );

  const totalpeople = adults + children + infants;

  const { epiloghAtomwn, epomenoVhma } = useTranslateStore(
    state => state.pricingPopUp
  );

  return (
    <BoxFixed>
      <BoxFlexSB sx={{ padding: '20px 40px' }}>
        <Typography variant="h5">{epiloghAtomwn}</Typography>
        <CounterPeople />
        <FinalPrice />
        <NextStep
          to={totalpeople > 0 ? '/stoixeia-epivatwn' : '#'}
          totalpeople={totalpeople}
        >
          {epomenoVhma}
        </NextStep>
      </BoxFlexSB>
    </BoxFixed>
  );
}

export default PricingPopUp;
