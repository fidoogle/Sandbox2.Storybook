import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import Button from './components/Button';
import ButtonEmoji from './components/ButtonEmoji';
import ButtonMUI from './components/ButtonMUI';
//import DeleteIcon from '@material-ui/icons/DeleteIcon';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App-buttons">
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button normal>Normal</Button>
        <ButtonEmoji></ButtonEmoji>
        <ButtonMUI color="primary" variant="contained"></ButtonMUI>
        <ButtonMUI color="secondary" variant="contained"></ButtonMUI>
      </div>
    </ThemeProvider>
  );
}

export default App;
