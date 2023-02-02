import React from 'react';
import { colors } from '../colors';
import { styled } from '@mui/system';
import { BoxFlexSB } from '../styledReusableComponents';
import CounterPeople from './CounterPeople';

const BoxFixed = styled('div')({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '200px',
  backgroundColor: colors.light_gray,
});

function PricingPopUp(props) {
  return (
    <BoxFixed>
      <BoxFlexSB sx={{ padding: '10px 20px' }}>
        <CounterPeople />
      </BoxFlexSB>
    </BoxFixed>
  );
}

export default PricingPopUp;
