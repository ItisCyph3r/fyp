import React from 'react';
import logo from './logo.svg';
import './App.css';
import './global.util.css';
import './globals.util.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './conponents/navbar/navbar';
import { Userbar } from './conponents/navbar/userbar';
import { Context } from './conponents/context';

function App() {


  // const [dark, setMode] = React.useState<String>('')

  // const getMode = localStorage.getItem("mode");

  // getMode && "dark" === getMode && body.classList.toggle("dark");

  // getMode && "dark" === getMode && setMode('dark')



  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        {/* <Route path="/home" element={<Home />} />
        <Route path="/compose/tweet" element={<Compose />} />
        <Route path="/:userName/status/:uuid" element={ <Status/> } />                    */}
      </Routes>
    </>
  );
}

export default App;
