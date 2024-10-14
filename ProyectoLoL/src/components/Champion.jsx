import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './champion.css';

function Champion() {
  const { id } = useParams(); // Obtén el id (nombre) del campeón desde la URL
  const [championData, setChampionData] = useState(null); // Para guardar los datos del campeón
  const [error, setError] = useState(null); // Para manejar errores

  useEffect(() => {
    // Función para obtener los datos del campeón
    const fetchChampionData = async () => {
      try {
        const response = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/14.19.1/data/en_US/champion/${id}.json`
        );

        // Verificar si la respuesta es correcta
        if (!response.ok) {
          throw new Error(`Error al obtener los datos: ${response.status}`);
        }

        const data = await response.json(); // Convertir la respuesta a JSON
        setChampionData(data.data[id]); // Guardar solo los datos del campeón específico
        console.log(data.data[id]); // Mostrar los datos del campeón en la consola
      } catch (err) {
        setError(err.message); // Guardar el error
        console.error('Error al obtener los datos del campeón:', err);
      }
    };

    fetchChampionData(); // Llamar la función de fetch
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>; // Mostrar el mensaje de error
  }

  if (!championData) {
    return <div>Cargando...</div>; // Mostrar un mensaje mientras los datos se cargan
  }

  return (
    <div className="champion-container">
      <h1>{championData.name}</h1>
      <p>{championData.title}</p>
      <p>{championData.lore}</p>
    </div>
  );
}

export default Champion;
