import React from 'react';
import NavbarTop from './components/Navbar';
import Logo from './components/Logo';
import SmallContact from './components/SmallContact';
import Slideshow from './components/Slideshow';
import About from './components/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <SmallContact/>
       <Logo/>
      <NavbarTop/>
      <Slideshow/>
      <About/>
    </div>
  );
}

export default App;
