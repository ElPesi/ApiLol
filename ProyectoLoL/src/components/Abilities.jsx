import React, { useState } from 'react';
import './abilities.css';

const Abilities = ({ spells, passive }) => {
  const [selectedAbility, setSelectedAbility] = useState(null);

  const handleAbilityClick = (ability) => {
    setSelectedAbility(ability);
  };

  return (
    <div className="champion-abilities">
      <h3>HABILIDADES</h3>
      <div className="abilities-icons">
        {/* Pasiva */}
        <div className="ability-icon" onClick={() => handleAbilityClick(passive)}>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/passive/${passive.image.full}`}
            alt={passive.name}
          />
        </div>

        {/* Habilidades Q, W, E, R */}
        {spells.map((spell) => (
          <div key={spell.id} className="ability-icon" onClick={() => handleAbilityClick(spell)}>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/spell/${spell.image.full}`}
              alt={spell.name}
            />
          </div>
        ))}
      </div>

      {/* Descripción de la habilidad seleccionada */}
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
