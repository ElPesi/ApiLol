import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';
import logo from '../logo/logo_lol.png'; // Importa el logo

function Search() {
  const [championName, setChampionName] = useState(''); // Estado para almacenar el nombre del campeón
  const navigate = useNavigate(); // Hook para navegar entre rutas

  // Función para manejar la búsqueda
  const handleSearch = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    const trimmedName = championName.trim(); // Elimina espacios en blanco
    if (trimmedName !== '') { // Verifica que el nombre no esté vacío
      navigate(`/champion/${trimmedName}`); // Navega a la ruta del campeón
    } else {
      alert('Por favor, ingrese un nombre de campeón.'); // Mensaje de alerta si el campo está vacío
    }
  };

  // Función para limpiar el campo de búsqueda
  const handleClear = () => {
    setChampionName(''); // Reinicia el estado a una cadena vacía
  };

  return (
    <div className="search-container"> {/* Contenedor principal */}
      <img src={logo} alt="Logo" className="logo" /> {/* Logo */}
      <h1>Busque un campeón</h1>
      <form onSubmit={handleSearch}> {/* Formulario de búsqueda */}
        <input 
          type="text" 
          className="search-bar" 
          placeholder="Buscar..." 
          value={championName} // Vincula el valor del input al estado
          onChange={(e) => setChampionName(e.target.value)} // Actualiza el estado con el valor ingresado
          aria-label="Buscar campeón" // Atributo para accesibilidad
        />
        <button type="submit" className="search-button" aria-label="Buscar campeón">Buscar</button> 
        <button type="button" className="clear-button" onClick={handleClear} aria-label="Limpiar búsqueda">Limpiar</button> 
      </form>
    </div>
  );
}

export default Search;
