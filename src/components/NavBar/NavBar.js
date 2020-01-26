/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Nav } from "./styles";

// eslint-disable-next-line react/prefer-stateless-function
export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Nav className="navbar navbar-expand-nd navbar-dark bg-dark fixed-top">
          <a
            href=""
            className="navbar-brand col-sn-3 col-md-2 mr-0 align-items-center"
          >
            Pokedex
          </a>
        </Nav>
      </div>
    );
  }
}
