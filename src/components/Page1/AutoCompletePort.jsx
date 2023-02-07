import Autocomplete from '@mui/material/Autocomplete';
import { useBoundStore } from '../../store/store';
import { useTranslateStore } from '../../store/translateStore';
import { CustomTextField } from '../styledReusableComponents';

export default function AutoCompletePort({ ports }) {
  const selectedPort = useBoundStore(state => state.selectedPort);
  const setSelectedPort = useBoundStore(state => state.setSelectedPort);
  const setSelectedRoute = useBoundStore(state => state.setSelectedRoute);
  const setSelectedDate = useBoundStore(state => state.setSelectedDate);
  const { topothesiaAnaxwrhshs } = useTranslateStore(state => state.menus);
  const portList = ports.map(port => {
    return { label: port.gr };
  });
  return (
    <Autocomplete
      disablePortal
      isOptionEqualToValue={(option, value) => option.value === value.value}
      options={portList}
      value={selectedPort ? selectedPort[0].gr : null}
      sx={{ width: 400 }}
      renderInput={params => (
        <CustomTextField
          {...params}
          label={topothesiaAnaxwrhshs}
          InputLabelProps={{
            style: { color: '#000' },
          }}
        />
      )}
      onChange={(_, value) => {
        value
          ? setSelectedPort(ports.filter(port => port.gr === value.label))
          : (setSelectedPort(null),
            setSelectedRoute(null),
            setSelectedDate(null));
      }}
    />
  );
}
