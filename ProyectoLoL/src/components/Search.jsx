import React from 'react';
import './Search.css';
import logo from '../logo/logo_lol.png'; 
function Search() {
  return (
    <div className="search-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Busque un campeón</h1>
      <input type="text" className="search-bar" placeholder="Buscar..." />
    </div>
  );
}

export default Search;
