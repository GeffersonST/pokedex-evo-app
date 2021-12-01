import React from "react";
import banner from "../../assets/bulbackground.png";

import { Main, TextWrapper, Banner } from "./styles";
const Home = () => {
  return (
    <div>
      <Main>
        <TextWrapper>
          <h1>
            <span>Encontre</span>
            Todos os
            <span>Pokemons</span>
          </h1>

          <h2>Suas evoluções e atributos</h2>
          <button>Veja os Pokemons</button>
        </TextWrapper>

        <Banner>
          <img src={banner} alt="Banner Bulbasauro" />
        </Banner>
      </Main>
    </div>
  );
};

export default Home;
