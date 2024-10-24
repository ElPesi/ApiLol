import React, { useState } from 'react'; // Importa React y el hook useState
import './abilities.css';

// Componente para mostrar las habilidades de un campeón
const Abilities = ({ spells, passive }) => {
  const [selectedAbility, setSelectedAbility] = useState(null); // Estado para almacenar la habilidad seleccionada

  // Función para manejar el clic en una habilidad
  const handleAbilityClick = (ability) => {
    setSelectedAbility(ability); // Actualiza el estado con la habilidad seleccionada
  };

  return (
    <div className="champion-abilities">
      <h3>HABILIDADES</h3>
      <div className="abilities-icons">
        {/* Icono de la habilidad pasiva */}
        <div className="ability-icon" onClick={() => handleAbilityClick(passive)}>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/passive/${passive.image.full}`} // URL de la imagen de la habilidad pasiva
            alt={passive.name} // Texto alternativo para la imagen
          />
        </div>

        {/* Mapea y muestra las habilidades Q, W, E, R */}
        {spells.map((spell) => (
          <div key={spell.id} className="ability-icon" onClick={() => handleAbilityClick(spell)}>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/spell/${spell.image.full}`} // URL de la imagen de cada habilidad
              alt={spell.name} // Texto alternativo para la imagen
            />
          </div>
        ))}
      </div>

      {/* Muestra la descripción de la habilidad seleccionada */}
      {selectedAbility && (
        <div className="ability-description">
          <h4>{selectedAbility.name}</h4> 
          <p>{selectedAbility.description}</p>
        </div>
      )}
    </div>
  );
};

export default Abilities;
