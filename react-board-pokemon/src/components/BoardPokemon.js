import React from 'react';
import PokeRow from './PokemonRow.js';

const data = require('../json/pokemon.json');

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pItems: data,
    };
  }

  renderPokemon() {
    let pokemonRowArr = [];
    let pokemonArr = [];
    let count = 0;
    let pokeRow = document.createElement('div');
    pokeRow.className = 'pokeRow';

    for (let i = 0; i < this.state.pItems.length; i++) {
      if (count < 5) {
        pokemonArr.push(this.state.pItems[i]);
        count++;
      } else {
        pokemonRowArr.push(<PokeRow pokemons={pokemonArr} key={i} />);
        pokemonArr = [];
        pokemonArr.push(this.state.pItems[i]);
        count++;
        count = 0;
      }
      if (i === this.state.pItems.length - 1) {
        pokemonRowArr.push(<PokeRow pokemons={pokemonArr} key={i} />);
      }
    }
    return pokemonRowArr;
  }

  render() {
    const welcome = 'Welcome to Pokedex!';
    return (
      <div>
        <div className="title">{welcome}</div>
        <div className="pokemonBoard">{this.renderPokemon()}</div>
      </div>
    );
  }
}
