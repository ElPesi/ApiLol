import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';
import logo from '../logo/logo_lol.png';

function Search() {
  const [championName, setChampionName] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    let trimmedName = championName.trim();
  
    if (trimmedName !== '') {

      trimmedName = trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1).toLowerCase();
  
      if (trimmedName === "Missfortune") {
        trimmedName = "MissFortune";
      }

      if (trimmedName === "Aurelionsol") {
        trimmedName = "AurelionSol";
      }

      if (trimmedName === "Drmundo") {
        trimmedName = "DrMundo";
      }

      if (trimmedName === "Jarvaniv") {
        trimmedName = "JarvanIV";
      }

      if (trimmedName === "Maestro yi") {
        trimmedName = "MasterYi";
      }

      if (trimmedName === "Ksante") {
        trimmedName = "KSante";
      }

      if (trimmedName === "Bardo") {
        trimmedName = "Bard";
      }

      if (trimmedName === "Xin zhao") {
        trimmedName = "XinZhao";

      if (trimmedName === "Twistedfate") {
        trimmedName = "TwistedFate";
      }

      }
  
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
