/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";

import PokemonList from "../PokemonList/PokemonList";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <PokemonList />
        </div>
      </div>
    );
  }
}
