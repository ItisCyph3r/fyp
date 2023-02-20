import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './global.util.css';
import './globals.util.css';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Navbar } from './conponents/navbar/navbar';
// import { Userbar } from './conponents/navbar/userbar';
// import { Context } from './conponents/context';
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
import { useDispatch, useSelector } from 'react-redux';
import axios, { AxiosResponse } from 'axios';
import { authActions } from './store/auth-Slice';
import S3Uploader from './pages/upload/aws-upload';
import { ProtectedRoute } from './conponents/protected-route/protectedRoute';
// import { Signup } from './pages/login/create';
// import { Create } from './pages/login/signup';

function App() {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [userState, setUserState] = React.useState();

  React.useEffect(() => {
    axios.get("http://localhost:4000/getuser", { withCredentials: true })
      .then((res: AxiosResponse) => {
        // console.log(res.data)
        if (res.data) {
          setUserState(res.data)
          dispatch(authActions.fetchUser(res.data))
        }
      })
  })

  // console.log(userState)

  return (

    <Routes>
      <>
        {/* <Route path="/home" element={<Home />} /> */}



        <Route
          path="/home"
          element={
            <ProtectedRoute isSignedIn={userState}>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/upload"
          element={
            <ProtectedRoute isSignedIn={userState}>
              <S3Uploader />
            </ProtectedRoute>
          }
        />
        {/* <Route path="/upload" element={<S3Uploader />} /> */}

        <Route
          path="/home/:videoID"
          element={
            <ProtectedRoute isSignedIn={userState}>
              <Video />
            </ProtectedRoute>
          }
        />
        {/*   */}
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
