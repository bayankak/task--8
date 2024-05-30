// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import NavbarCompon from './components/Navbar';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.css';
import Services from './components/Services';
import Hosting from './components/Hosting';
import Footer from './components/Footer';



const App = () => {
  return (
    <div>
      <NavbarCompon/>
       <Header/>
      <Services/>
      <Hosting/>
      <Footer/>
      
    </div>
  );
}

export default App;