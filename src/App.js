import React, { Fragment } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Routes from './routes';
import theme from './theme';
import './App.css';

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Fragment>
  )
}

export default App;
