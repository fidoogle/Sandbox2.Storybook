import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import ButtonMUI from './components/ButtonMUI';
import DiscreetSliderMUI from './components/DiscreetSliderMUI';
import RangeSliderMUI from './components/RangeSliderMUI';
import TabMUI from './components/TabMUI';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App-buttons">
        <ButtonMUI
          color="primary"
          variant="contained"
          startIcon={<CheckCircleIcon />}
          endIcon={<CheckCircleOutlinedIcon />}>Primary Contained</ButtonMUI>
        <ButtonMUI
          color="primary"
          variant="outlined"
          startIcon={<CheckCircleIcon />}
          endIcon={<CheckCircleOutlinedIcon />}>Primary Outlined</ButtonMUI>
        <ButtonMUI
          color="primary"
          startIcon={<CheckCircleIcon />}
          endIcon={<CheckCircleOutlinedIcon />}>Primary Plain</ButtonMUI>
        <ButtonMUI
          color="secondary"
          variant="contained"
          startIcon={<CheckCircleIcon />}
          endIcon={<CheckCircleOutlinedIcon />}>Secondary Contained</ButtonMUI>
        <ButtonMUI
          color="secondary"
          variant="outlined"
          startIcon={<CheckCircleIcon />}
          endIcon={<CheckCircleOutlinedIcon />}>Secondary Outlined</ButtonMUI>
        <ButtonMUI
          color="secondary"
          startIcon={<CheckCircleIcon />}
          endIcon={<CheckCircleOutlinedIcon />}>Primary Plain</ButtonMUI>

        <DiscreetSliderMUI></DiscreetSliderMUI>
        <RangeSliderMUI></RangeSliderMUI>

        <TabMUI></TabMUI>
      </div>
    </ThemeProvider>
  );
}

export default App;
