import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importamos useNavigate
import './Search.css';
import logo from '../logo/logo_lol.png'; 

function Search() {
  const [championName, setChampionName] = useState(''); // Estado para almacenar el nombre ingresado
  const navigate = useNavigate(); // Para redirigir

  const handleSearch = (e) => {
    e.preventDefault();
    if (championName !== '') {
      // Navegar a la ruta del campeón con el nombre ingresado
      navigate(`/champion/${championName}`);
    }
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
          onChange={(e) => setChampionName(e.target.value)}  // Actualizar el estado
        />
      </form>
    </div>
  );
}

export default Search;
