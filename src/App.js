import React from 'react';
import './App.css';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme/theme';
import OrderActionModalDemo from './pages/OrderActionModalDemo';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <OrderActionModalDemo />
    </ThemeProvider>
  );
};

export default App;
