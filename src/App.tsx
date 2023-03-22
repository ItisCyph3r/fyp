import React from 'react';
import './App.css';
import './global.util.css';
import './globals.util.css';
import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/landingpage/landingpage';
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
import S3Uploader from './pages/upload/aws-upload';
import { ProtectedRoute } from './conponents/protected-route/protectedRoute';
import generateUUID from './conponents/uuid/uuid';
import env from './env';
// import { Signup } from './pages/login/create';
// import { Create } from './pages/login/signup';

function App() {
  const dispatch = useDispatch()

  const [userState, setUserState] = React.useState();


  // console.log(env) 

  React.useEffect(() => {
    axios.get(`${env.baseUrl}/getuser`, { withCredentials: true })
      .then((res: AxiosResponse) => {
        // console.log(res.data)
        if (res.data) {
          setUserState(res.data)
          dispatch(authActions.fetchUser(res.data))
        }
      })
  })
  console.log(userState)

  return (

    <Routes>
      <>
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<S3Uploader />} />
        {/* <Route
          path="/upload"
          element={
            <ProtectedRoute isSignedIn={userState}>
              <S3Uploader />
            </ProtectedRoute>
          }
        /> */}

        <Route path="/home/:videoID" element={<Video />} />

        {/* <Route
          path="/home/:videoID"
          element={
            <ProtectedRoute isSignedIn={userState}>
              <Video />
            </ProtectedRoute>
          }
        /> */}

        
        <Route path="/" element={<LandingPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<Create />} />
        <Route path="*" element={<Error404 />} />
      </>
    </Routes>

  );
}

export default App;












// Create a typescript conponent  that sends otp to emails? 
