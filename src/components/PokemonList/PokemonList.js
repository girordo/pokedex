/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

import axios from "axios";
import PokemonCard from "../PokemonCard/PokemonCard";

export default class PokemonList extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    url: "https://pokeapi.co/api/v2/pokemon?limit=151/",
    // eslint-disable-next-line react/no-unused-state
    pokemon: null
  };

  async componentDidMount() {
    axios.get(this.state.url).then(res => {
      this.setState({ pokemon: res.data.results });
    });
  }

  render() {
    return (
      <>
        {this.state.pokemon ? (
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <h1>Loading Pokemon</h1>
        )}
      </>
    );
  }
}
