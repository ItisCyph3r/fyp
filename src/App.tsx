import React from 'react';
import logo from './logo.svg';
import './App.css';
import './global.util.css';
import './globals.util.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './conponents/navbar/navbar';
// import { Userbar } from './conponents/navbar/userbar';
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
import { Video } from './pages/video/video';
import { useDispatch } from 'react-redux';
import axios, { AxiosResponse } from 'axios';
import { authActions } from './store/auth-Slice';
import { Upload } from './pages/upload/upload';
import S3Uploader from './pages/upload/aws-upload';
// import { Signup } from './pages/login/create';
// import { Create } from './pages/login/signup';

function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    // axios.get("https://zapnodetv.onrender.com/getuser", { withCredentials: true })
    axios.get("http://localhost:4000/getuser", { withCredentials: true })
      .then((res: AxiosResponse) => {
        // console.log(res.data)
        if (res.data) {
          dispatch(authActions.fetchUser(res.data))
        }
      })
  })
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<S3Uploader />} />
        <Route path="/home/:videoID" element={<Video />} />
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












// Create a typescript conponent  that sends otp to emails? 
