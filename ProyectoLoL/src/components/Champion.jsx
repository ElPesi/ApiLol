import React, { useEffect, useState } from 'react'; // Importa React y hooks necesarios
import { useParams } from 'react-router-dom'; 
import Presentation from './Presentation'; 
import Abilities from './Abilities'; 
import './champion.css'; 

// Componente principal para mostrar información de un campeón
function Champion() {
  const { id } = useParams(); // Obtiene el ID del campeón desde la URL
  const [championData, setChampionData] = useState(null); // Estado para almacenar los datos del campeón
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Función para obtener datos del campeón desde la API
    const fetchChampionData = async () => {
      try {
        const response = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/14.19.1/data/es_MX/champion/${id}.json`
        );
        // Verifica si la respuesta es exitosa
        if (!response.ok) {
          throw new Error(`Error al obtener los datos: ${response.status}`); // Lanza un error si hay un problema
        }
        const data = await response.json(); // Convierte la respuesta a formato JSON
        setChampionData(data.data[id]); // Almacena los datos del campeón en el estado
      } catch (err) {
        setError(err.message); // Almacena el mensaje de error en caso de fallo
      }
    };
    fetchChampionData(); // Llama a la función para obtener datos
  }, [id]); // Se ejecuta cada vez que cambia el ID

  // Maneja la visualización de errores
  if (error) {
    return <div>Error: {error}</div>; // Muestra el mensaje de error
  }

  // Maneja el estado de carga
  if (!championData) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se obtienen datos
  }

  // Desestructura los datos del campeón
  const { name, title, lore, tags, info, spells, passive } = championData;

  return (
    <div className="champion-container">
      {/* Sección de presentación del campeón */}
      <Presentation 
        name={name} 
        title={title} 
        lore={lore} 
        tags={tags} 
        info={info}
        id={id}  // Pasa el ID para obtener el splash art
      />

      {/* Sección de habilidades del campeón */}
      <Abilities spells={spells} passive={passive} />
    </div>
  );
};

export default Champion; // Exporta el componente Champion
