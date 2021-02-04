import React from 'react';
import Board from './components/BoardPokemon.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
