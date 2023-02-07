import Autocomplete from '@mui/material/Autocomplete';
import { useBoundStore } from '../../store/store';
import { useTranslateStore } from '../../store/translateStore';
import { CustomTextField } from '../styledReusableComponents';

export default function AutoCompleteRoutes({ routes }) {
  const selectedRoute = useBoundStore(state => state.selectedRoute);
  const setSelectedRoute = useBoundStore(state => state.setSelectedRoute);
  const setSelectedPort = useBoundStore(state => state.setSelectedPort);
  const setSelectedDate = useBoundStore(state => state.setSelectedDate);
  const { diathesimesEkdromes } = useTranslateStore(state => state.menus);
  const routeList = routes.map(route => {
    return { label: route.descr };
  });

  return (
    <Autocomplete
      disablePortal
      isOptionEqualToValue={(option, value) => option.value === value.value}
      options={routeList}
      value={selectedRoute ? selectedRoute[0].descr : null}
      sx={{ width: 400 }}
      renderInput={params => (
        <CustomTextField
          {...params}
          label={diathesimesEkdromes}
          InputLabelProps={{
            style: { color: '#000' },
          }}
        />
      )}
      onChange={(_, value) => {
        value
          ? setSelectedRoute(
              routes.filter(route => route.descr === value.label)
            )
          : (setSelectedRoute(null),
            setSelectedDate(null),
            setSelectedPort(null));
      }}
    />
  );
}
