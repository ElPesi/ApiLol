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
          `https://ddragon.leagueoflegends.com/cdn/14.19.1/data/es_MX/champion/${id}.json`
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

  // Extraer la información relevante del campeón
  const { name, title, lore, tags, info } = championData;

  return (
    <section
      className="champion-container"
      style={{ backgroundImage: `url(/splash/${id}_0.jpg)` }} 
    >
      <div className="overlay"></div> {/* Capa oscura sobre la imagen */}
      
      <article className="champion-content">
        <header>
          <h1 className="champion-title">{name}</h1>
          <h2 className="champion-subtitle">{title}</h2>
        </header>
        
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
      </article>
    </section>
  );
}
export default Champion;
