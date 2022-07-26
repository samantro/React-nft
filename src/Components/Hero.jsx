import React from "react";
import ReactDome from 'react-dom';
import '../resources/Hero.css';
import background from "../resources/Images/back.jpeg";
import {Link} from 'react-router-dom';
import Explore from '../pages/Explore.jsx';
function Hero() {

  return (
    <div id="hero" style={{backgroundImage: `url(${background})`}}>   
      <h1 id="header-text-first"> NFT </h1>
      <h1 id="header-text-second"> Hexaview Marketplace</h1>
      <h5 id="header-subtext">Create, add NFT's</h5>

      <div id="hero-buttons">
        <Link to="/explore"><button id="explore">Explore</button></Link>
        <button id="create">Create</button>
      </div>
    </div>
  );
};

export default Hero;