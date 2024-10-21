import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';
import logo from '../logo/logo_lol.png'; 

function Search() {
  const [championName, setChampionName] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedName = championName.trim();
    if (trimmedName !== '') {
      navigate(`/champion/${trimmedName}`);
    } else {
      alert('Por favor, ingrese un nombre de campeón.');
    }
  };

  const handleClear = () => {
    setChampionName('');
  };

  return (
    <div className="search-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Busque un campeón</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Buscar..." 
          value={championName} 
          onChange={(e) => setChampionName(e.target.value)}
          aria-label="Buscar campeón"
        />
        <button type="submit" className="search-button" aria-label="Buscar campeón">Buscar</button>
        <button type="button" className="clear-button" onClick={handleClear} aria-label="Limpiar búsqueda">Limpiar</button>
      </form>
    </div>
  );
}

export default Search;
