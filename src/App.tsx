import React from 'react';
import logo from './logo.svg';
import './App.css';
import './global.util.css';
import './globals.util.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './conponents/navbar/navbar';
import { Userbar } from './conponents/navbar/userbar';
import { Context } from './conponents/context';
// import { Fml } from './pages/fml';
import { LandingPage } from './pages/landingpage/landingpage';
// import { LandingPage } from './pages/landingpage/landingpage';
import { Error404 } from './pages/404/404';
import { Account } from './pages/login/account';
import { Login } from './pages/login/login';
import { Signup } from './pages/login/signup';
import { Create } from './pages/login/create';
import { Home } from './pages/home/home';
// import { Signup } from './pages/login/create';
// import { Create } from './pages/login/signup';

function App() {


  // const [dark, setMode] = React.useState<String>('')

  // const getMode = localStorage.getItem("mode");

  // getMode && "dark" === getMode && body.classList.toggle("dark");

  // getMode && "dark" === getMode && setMode('dark')



  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/:videoID" element={<Navbar />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<Error404 />} />
        {/*
          <Route path="/compose/tweet" element={<Compose />} />
          <Route path="/:userName/status/:uuid" element={ <Status/> } />  */}
      </Routes>
    </>
  );
}

export default App;
