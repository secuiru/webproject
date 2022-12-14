import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from './sites/Home';
import Login from './sites/Login';
import Register from './sites/Register';
import Protected from './sites/Protected';
import Protected1 from './sites/Protected1';
import Protected2 from './sites/Protected2';
import Settings from './sites/Settings';
import { useState } from "react";




function App() {
  const jwtfromstorage = window.localStorage.getItem('authData');
  const [userJWT, setuserJWT] = useState(jwtfromstorage);
  let authRoutes = <>
    <Route path='/register' element={<Register />} />
    <Route path='/login' element={<Login login={newJWT => {
      setuserJWT(newJWT)
      window.localStorage.setItem('authData', newJWT)
    }} />} />

  </>

  if (userJWT != null) {
    authRoutes = <>
      <Route path='/protected' element={<Protected />} />
      <Route path='/protected1' element={<Protected1 />} />
      <Route path='/protected2' element={<Protected2 />} />
      <Route path='/settings' element={<Settings logout={() => {
        setuserJWT(null);
        window.localStorage.removeItem('authData')
      }} />} />
     </> 
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home userLoggedIn={userJWT != null} />} />
        {authRoutes}
        <Route path="*" element={<Home userLoggedIn={userJWT != null} />} />
      </Routes>
    </>
  )
}

export default App;
