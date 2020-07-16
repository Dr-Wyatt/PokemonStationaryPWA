import React from 'react';
import './App.css';
import Lists from './components/Lists';
import {BrowserRouter, Route } from 'react-router-dom';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <Route path="/PokemonStationaryPWA/" exact component={Lists}/>
      <Route path="/PokemonStationaryPWA/:pokemon" exact component={Details}/>
    </BrowserRouter>
  );
}

export default App;
