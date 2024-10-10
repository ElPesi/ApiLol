import React from 'react';
import './Search.css';

function Search() {
  return (
    <div className="search-container">
      <h1>Busque un campeón</h1>
      <input type="text" className="search-bar" placeholder="Buscar..."/>
    </div>
  );
}

export default Search;
