import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { useBoundStore } from '../../store/store';

function DatePickerCustom({ disabled }) {
  const selectedDate = useBoundStore(state => state.selectedDate);
  const setSelectedDate = useBoundStore(state => state.setSelectedDate);
  const handleChange = newValue => {
    setSelectedDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        minDate={dayjs(new Date())}
        disabled={disabled}
        label="Επιλογή Ημερομηνίας"
        inputFormat="DD/MM/YYYY"
        value={selectedDate}
        onChange={handleChange}
        renderInput={params => <TextField {...params} sx={{ width: 400 }} />}
      />
    </LocalizationProvider>
  );
}

export default DatePickerCustom;
