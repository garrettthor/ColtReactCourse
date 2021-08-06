import React, { Component } from 'react';
import './App.css';
// import Pokedex from './Pokedex';
import Pokegame from './Pokegame';

function App() {
  return (
    <div className="App">
        <Pokegame />
        {/* <Pokedex /> */}
        {/* <Pokecard 
            id={4}
            name="Charmander"
            type="fire"
            exp={62}
        /> */}
    </div>
  );
}

export default App;
