// import logo from './logo.svg';
import React from 'react'
 import {
 Routes,
 Route,
} from "react-router-dom";
import './App.css';
import Login from './Components/Login.js';
import Home from './Components/Home.js';
import Breakfast from './Components/Breakfast';
import Dinner from './Components/Dinner';




function App() {
  return (
      <div className="App">
        <Routes>
           <Route path = '/' element={<Login/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/Breakfast" element={<Breakfast />} />
          <Route path="/Dinner"  element={<Dinner/>} />
      </Routes>
      </div>
  );
}

export default App;
