import React from "react";
import Hero from "../Components/Hero";
import Navbar1 from "../Components/Navbar1";
import Wrapper from "../Components/Wrapper";
import '../resources/Hero.css';
import Card1 from '../Components/Card1.jsx';
import Cardwrap from '../Components/Cardwrap';
import '../resources/cards.css';


function Explore(){
  
  return (
    <div>
      <Navbar1 />
      <Hero />
      <div>
        <h1 id="expo">Explore</h1>
      </div>

      <div className="weapper">
        <div className="card_wrap">
          <Card1 />
          
        </div>
      </div>
    </div>
  );
};

export default Explore;