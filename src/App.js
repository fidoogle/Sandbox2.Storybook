import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Button from './components/Button';
import ButtonEmoji from './components/ButtonEmoji';
import ButtonMUI from './components/ButtonMUI';
//import DeleteIcon from '@material-ui/icons/DeleteIcon';

function App() {
  return (
    <div className="App-buttons">
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button normal>Normal</Button>
      <ButtonEmoji></ButtonEmoji>
      <ButtonMUI></ButtonMUI>
    </div>
  );
}

export default App;
