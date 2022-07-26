import React from 'react';
import Navbar1 from '../Components/Navbar1';
import Hero from '../Components/Hero';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';



function Home() {
  return (
    
      <div>
        <Navbar1 />
        <Hero />
      </div>
    
    
  );
}

export default Home;
