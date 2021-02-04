import React from 'react';

export default class Pokemon extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pokemon: 'bla'
        }
    }

    renderPokemonImg(){
        return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.props.pokemon.id + '.png';
    }

    render(){
        return (
            <div className="pokemon">
                <div className="pokemonImg">
                    <img src={this.renderPokemonImg()} alt="Logo" />
                </div>
                <div className="pokemonName">
                    {this.props.pokemon.identifier}
                </div>
            </div>
        )
    }
}