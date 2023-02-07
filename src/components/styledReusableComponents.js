import { styled } from '@mui/system';
import { Box, TextField } from '@mui/material';
import { colors } from './colors';

//FLEX
export const BoxFlexSB = styled(Box, {
  shouldForwardProp: prop => prop !== 'gap',
})(({ theme, gap }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: `${gap ? gap : '30px'}`,
  },
}));

export const BoxSBnoBP = styled(Box)(({ gap = '0' }) => ({
  display: 'flex',
  gap,
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const BoxCenter = styled(Box)(({ gap = 0, flexDirection = 'row' }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap,
  flexDirection,
}));

export const BoxGap = styled(Box)(({ gap = '1px' }) => ({
  display: 'flex',
  gap,
  alignItems: 'center',
}));

export const BoxGapFlexStart = styled(Box)(({ gap = '1px' }) => ({
  display: 'flex',
  gap,
  alignItems: 'flex-start',
}));

export const BoxGapJCFlexEnd = styled(Box)(({ gap = '1px' }) => ({
  display: 'flex',
  gap,
  justifyContent: 'flex-end',
}));

//COLORS
export const BlackLayer = styled(Box)({
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: '10',
});

export const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 0,
    '& fieldset': {
      borderColor: colors.yellow,
    },
    '&:hover fieldset': {
      borderColor: colors.yellow_light,
    },
    '&.Mui-focused fieldset': {
      borderColor: colors.yellow,
    },
    '&.Mui-disabled fieldset': {
      borderColor: colors.yellow,
    },
  },
});
