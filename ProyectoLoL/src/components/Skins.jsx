// Skins.js
import React, { useState } from 'react'; // Importamos React y el hook useState
import './skins.css'; // Importamos los estilos específicos para el componente de skins

// Definimos el componente Skins, que recibe dos props: 
// - skins: un array con las skins del campeón
// - championId: el ID del campeón, usado para construir las URLs de las imágenes
function Skins({ skins, championId }) {
  // Estado que mantiene la skin actualmente seleccionada, por defecto se selecciona la primera
  const [selectedSkin, setSelectedSkin] = useState(skins[0]);

  // Función que actualiza el estado selectedSkin cuando el usuario hace clic en una miniatura
  const handleSkinClick = (skin) => {
    setSelectedSkin(skin);
  };

  return (
    <section className="skins-section">
      {/* Título de la sección de skins */}
      <h3>ASPECTOS </h3>

      {/* Imagen de la skin seleccionada */}
      {selectedSkin && (
        <div className="selected-skin">
          {/* Imagen en grande de la skin seleccionada */}
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_${selectedSkin.num}.jpg`}
            alt={selectedSkin.name} // Descripción de la imagen para accesibilidad
          />
          {/* Nombre de la skin seleccionada */}
          <h4>{selectedSkin.name}</h4>
        </div>
      )}

      {/* Contenedor de las miniaturas de las skins */}
      <div className="skins-thumbnails">
        {/* Mapeamos cada skin en el array skins para crear una miniatura */}
        {skins.map((skin) => (
          <img
            key={skin.id} // Key única para identificar cada miniatura
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championId}_${skin.num}.jpg`}
            alt={skin.name} // Descripción de la miniatura
            onClick={() => handleSkinClick(skin)} // Llama a handleSkinClick con la skin clicada
            className="skin-thumbnail" // Clase CSS para darle estilo a la miniatura
          />
        ))}
      </div>
    </section>
  );
}

export default Skins;
