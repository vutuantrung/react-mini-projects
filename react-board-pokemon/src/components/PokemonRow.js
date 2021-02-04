import Pokemon from './PokemonSubject.js';
import React from 'react';

export default class PokeRow extends React.Component{
    render(){
        return (
            <div className="pokeRow">
            {this.props.pokemons.map(pokemon => (
                <Pokemon pokemon={pokemon}/>
            ))}
            </div>
        )
    }
}