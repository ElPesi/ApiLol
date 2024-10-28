import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import Intro from './Intro'; 

function Home() {
  const navigate = useNavigate(); 
  const [showIntro, setShowIntro] = useState(true);

  // Oculta la introducción después de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  const handleStart = () => {
    navigate('/search'); 
  };

  return (
    <div className="home-container">
      {showIntro ? (
        <Intro /> 
      ) : (
        <>
          <h1>Bienvenidos a la Página de Campeones de LoL</h1>
          <p>
            En esta página puedes explorar cada campeón de League of Legends, descubrir sus habilidades,
            historia y skins.
          </p>
          <button className="start-button" onClick={handleStart}>Empezar</button>
        </>
      )}
    </div>
  );
}

export default Home;
