import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './champion.css';

function Champion() {
  const { id } = useParams(); 
  const [championData, setChampionData] = useState(null); 
  const [selectedAbility, setSelectedAbility] = useState(null); // Estado para la habilidad seleccionada
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChampionData = async () => {
      try {
        const response = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/14.19.1/data/es_MX/champion/${id}.json`
        );

        if (!response.ok) {
          throw new Error(`Error al obtener los datos: ${response.status}`);
        }

        const data = await response.json();
        setChampionData(data.data[id]);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchChampionData();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!championData) {
    return <div>Cargando...</div>;
  }

  // Extraer información necesaria
  const { name, title, lore, tags, info, spells, passive } = championData;

  // Función para manejar el clic en una habilidad
  const handleAbilityClick = (ability) => {
    setSelectedAbility(ability);
  };

  return (
    <div
      className="champion-container"
      style={{ backgroundImage: `url(/splash/${id}_0.jpg)` }}
    >
      <div className="overlay"></div>
      <div className="champion-content">
        <h1 className="champion-title">{name}</h1>
        <h2 className="champion-subtitle">{title}</h2>
        <p className="champion-description">{lore}</p>

        <div className="champion-details">
          <div className="detail-box">
            <h4>Rol</h4>
            <p>{tags.join(', ')}</p>
          </div>
          <div className="detail-box">
            <h4>Dificultad</h4>
            <p>{info.difficulty}</p>
          </div>
        </div>

        {/* Sección de habilidades */}
        <div className="champion-abilities">
          <h3>Habilidades</h3>

          {/* Iconos de las habilidades */}
          <div className="abilities-icons">
            {/* Pasiva */}
            <div
              className="ability-icon"
              onClick={() => handleAbilityClick(passive)}
            >
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/passive/${passive.image.full}`}
                alt={passive.name}
              />
            </div>

            {/* Habilidades Q, W, E, R */}
            {spells.map((spell) => (
              <div
                key={spell.id}
                className="ability-icon"
                onClick={() => handleAbilityClick(spell)}
              >
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/spell/${spell.image.full}`}
                  alt={spell.name}
                />
              </div>
            ))}
          </div>

          {/* Mostrar descripción de la habilidad seleccionada */}
          {selectedAbility && (
            <div className="ability-description">
              <h4>{selectedAbility.name}</h4>
              <p>{selectedAbility.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Champion;
