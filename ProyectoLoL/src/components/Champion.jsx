import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Presentation from './Presentation';
import Abilities from './Abilities';
import './champion.css';

function Champion() {
  const { id } = useParams();
  const [championData, setChampionData] = useState(null);
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

  const { name, title, lore, tags, info, spells, passive } = championData;

  return (
    <div className="champion-container">
      {/* Sección de presentación */}
      <Presentation 
        name={name} 
        title={title} 
        lore={lore} 
        tags={tags} 
        info={info}
        id={id}  // Pasamos el ID para el splash art
      />

      {/* Sección de habilidades */}
      <Abilities spells={spells} passive={passive} />
    </div>
  );
};

export default Champion;
