import React from 'react'
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Notfound from '../pages/Notfound';

import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
        
          <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Signup' element={<Signup/>}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='Dashboard' element={<Dashboard/>}></Route>
          <Route path='*' element={<Notfound/>} ></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter