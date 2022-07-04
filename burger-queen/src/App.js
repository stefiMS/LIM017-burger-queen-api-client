// import logo from './logo.svg';
import React from 'react'
 import {
 Routes,
 Route,
} from "react-router-dom";
import './App.css';
import Login from './Components/Login.js';
import Home from './Components/Home.js';
import Orders from './Components/Orders.js'
import { ErrorNoAccess } from './Components/ErrorNoAccess.js';




function App() {
  return (
      <div className="App">
        <Routes>
          <Route path = '/' element={<Login/>} />
          <Route path="/home" element={<Home />} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/noAccess' element={<ErrorNoAccess/>} />
        </Routes>
        
      </div>
  );
}

export default App;
