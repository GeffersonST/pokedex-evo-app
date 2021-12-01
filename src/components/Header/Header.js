import React from "react";
import logo from "../../assets/logo.png";
import { HeaderLinks, HeaderPokemon, HeaderA } from "./styles";

const Header = () => {
  return (
    <HeaderPokemon>
      <HeaderLinks>
        <img src={logo} alt="Logo Pokemon" />
      </HeaderLinks>
      <HeaderLinks to="/">Home</HeaderLinks>
      <HeaderLinks to="/pokedex">Pokedex</HeaderLinks>
      <HeaderA href="https://github.com/GeffersonST target=" _blank>
        Contact
      </HeaderA>
    </HeaderPokemon>
  );
};

export default Header;
