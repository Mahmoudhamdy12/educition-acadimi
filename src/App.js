import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Nav from './Componant/Navbar/Nav';
import Footer from './Componant/Footer/Footer';
import Home from './Componant/Home/Home';
import About from './Componant/About/About';
import Conect from './Componant/Conect/Conect';
import Education from './Componant/Education/Education';
import Stages from './Componant/Stages/Stages';

function App() {
  return (
    <div className="App">
      <>
      <Nav />
      <Routes>
          <Route path="/"  element={<Home/>} />
        <Route path="/education" element={<Education/>}/>
        <Route path="/conect" element={<Conect />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/stages" element={<Stages />}/>
      </Routes>
    <Footer />
    </>
      </div> 
      )
    }

export default App;
