import { createTheme } from '@mui/material';
import COLORS from './color';
import FONTS from './fonts';
import COMPONENTS from './components';

// Global theme for MUI
const theme = createTheme({
  typography: {
    fontFamily: FONTS.regular,
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: COLORS.primary,
    },
    secondary: {
      main: COLORS.secondary,
    },
    success: {
      main: COLORS.success,
    },
    background: {
      default: COLORS.background.default,
      secondary: COLORS.background.secondary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: COMPONENTS.button,
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: COMPONENTS.alert,
        standardSuccess: {
          color: 'white',
          backgroundColor: COLORS.success,
          '& .MuiAlert-icon': {
            color: 'white',
          },
        },
        standardWarning: {
          color: 'white',
          backgroundColor: COLORS.danger,
          '& .MuiAlert-icon': {
            color: 'white',
          },
        },
      },
    },
  },
});

export default theme;
