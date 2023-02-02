import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getDiscounts,
  getPricing,
  getAvailability,
  getRoutes,
  getPorts,
} from '../api/pegasusApi';
import { Container } from '@mui/system';
import { Typography, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import AutoCompletePort from '../components/Page1/AutoCompletePort';
import AutoCompleteRoutes from '../components/Page1/AutoCompleteRoutes';
import DatePickerCustom from '../components/Page1/DatePickerCustom';
import { BoxFlexSB, BoxCenter } from '../components/styledReusableComponents';
import CardsWithRoutes from '../components/Page1/CardsWithRoutes';
import { useBoundStore } from '../store/store';
import SmallDate from '../components/Page1/SmallDate';
import PricingPopUp from '../components/Page1/PricingPopUp';
import ClickedOutsideOfCard from '../components/Page1/ClickedOutsideOfCard';
import ErrorMessage from '../components/ErrorMessage';

function Page1(props) {
  const selectedPort = useBoundStore(state => state.selectedPort);
  const selectedRoute = useBoundStore(state => state.selectedRoute);
  const selectedDate = useBoundStore(state => state.selectedDate);
  const selectedCard = useBoundStore(state => state.selectedCard);

  const routes = useQuery(['routes'], getRoutes);
  const ports = useQuery(['ports'], getPorts, {
    select: data =>
      data.map((port, index) => {
        return { portId: index, gr: port.DESCR[0], en: port.DESCRFOREIGN[0] };
      }),
  });

  let menus;
  let smallDate;
  let cardsWithRoutes;
  let pricingPopUp;
  if (routes.isLoading || ports.isLoading) {
    menus = (
      <BoxCenter>
        <CircularProgress />
      </BoxCenter>
    );
  }
  if (routes.isError) {
    menus = <ErrorMessage message={routes.error.message} />;
  }
  if (ports.isError) {
    menus = <ErrorMessage message={ports.error.message} />;
  }
  if (routes.isSuccess && ports.isSuccess) {
    //==============
    if (!selectedPort && !selectedRoute) {
      menus = (
        <BoxFlexSB>
          <AutoCompleteRoutes routes={routes.data} />
          <AutoCompletePort ports={ports.data} />
          <DatePickerCustom disabled={true} />
        </BoxFlexSB>
      );
    }
    //==============
    if (selectedPort && !selectedRoute) {
      const filteredRoute = routes.data.filter(
        route => route.port === selectedPort[0].gr
      );

      menus = (
        <BoxFlexSB>
          <AutoCompleteRoutes routes={filteredRoute} />
          <AutoCompletePort ports={ports.data} />
          <DatePickerCustom disabled={true} />
        </BoxFlexSB>
      );
    }
    //==============
    if (!selectedPort && selectedRoute) {
      const filteredPort = ports.data.filter(
        port => selectedRoute[0].port.filter(p => p === port.gr).length > 0
      );

      menus = (
        <BoxFlexSB>
          <AutoCompleteRoutes routes={routes.data} />
          <AutoCompletePort ports={filteredPort} />
          <DatePickerCustom disabled={true} />
        </BoxFlexSB>
      );
    }
    //==============
    if (selectedPort && selectedRoute) {
      menus = (
        <BoxFlexSB>
          <AutoCompleteRoutes routes={selectedRoute} />
          <AutoCompletePort ports={selectedPort} />
          <DatePickerCustom disabled={false} />
        </BoxFlexSB>
      );
      if (selectedDate) {
        smallDate = <SmallDate />;
        cardsWithRoutes = <CardsWithRoutes />;
      }
      if (selectedCard?.cruise_id) {
        pricingPopUp = <PricingPopUp />;
      }
    }
  }

  return (
    <>
      <Container maxWidth="xl">
        {menus}
        {smallDate}
      </Container>
      <Container maxWidth="md">
        <ClickedOutsideOfCard>
          {cardsWithRoutes}
          {pricingPopUp}
        </ClickedOutsideOfCard>
      </Container>
    </>
  );
}

export default Page1;
