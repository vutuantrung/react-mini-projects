import Pokemon from './pokemonSubject.js';
import React, { Component } from 'react';
export default class PokeRow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    renderPokemonRow(){
        let pokeArr = [];
        for(let i= 0; i < this.props.pokemons.length; i++){
            pokeArr.push(<Pokemon pokemon={this.props.pokemons[i]}/>)
        }
        return pokeArr;
    }

    render(){
        return (
            <div className="pokeRow">
                {this.renderPokemonRow()}
            </div>
        )
    }
}