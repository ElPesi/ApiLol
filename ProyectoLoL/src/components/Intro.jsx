import React from 'react';
import './Intro.css';
import logo from '../logo/logo_lol.png';

function Intro() {
return (
    <div className="intro-container">
    <img src={logo} alt="Logo" className="intro-image" />
    </div>
);
}

export default Intro;
