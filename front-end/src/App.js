
import './App.css';
import Signin from './components/Auth/Signin/Signin';
import Signup from './components/Auth/Signup/Signup';
import { Route, Routes } from 'react-router-dom';
import dashboard from './components/dashboard/dashboard';

import Index from "./components/dashboard/Carosal/Index";






import MainRoutes from './Routes/MainRoutes';
import React from 'react';

function App() {
  return (
    <>
    <MainRoutes/>

    {/* <Index/> */}
    

  /*  <Routes>
     
      <Route path="/" element={<dashboard/>} />
      

    </Routes> */

    </>
  );
}

export default App;
