import React from "react";

import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import ViewPokemon from "./Pages/ViewPokemon/ViewPokemon";
function App() {
  return (
    <div>
      <Header />

      <Home />
      <ViewPokemon />
    </div>
  );
}

export default App;
