import React from 'react';
import './App.css';
import Navbar1 from './Components/Navbar1.jsx';
import Hero from './Components/Hero.jsx';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';



function App() {
  return (
    
      <div id="Home">
        <Navbar1 />
        <Hero />
      </div>
    
    
  );
}

export default App;
