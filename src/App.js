import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Button from './components/Button';
import ButtonEmoji from './components/ButtonEmoji';
import ButtonMUI from './components/ButtonMUI';
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


        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button normal>Normal</Button>
        <ButtonEmoji></ButtonEmoji>
      </div>
    </ThemeProvider>
  );
}

export default App;
