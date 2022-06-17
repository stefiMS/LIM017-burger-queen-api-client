// import logo from './logo.svg';
import React from 'react'
 import {
 Routes,
 Route,
} from "react-router-dom";
import './App.css';
import Login from './Components/Login.js';
import Home from './Components/Home.js';




function App() {
  return (
      <div className="App">
        <Routes>
           <Route path = '/' element={<Login/>} />
          <Route path="/home" element={<Home />} />
      </Routes>
      </div>
  );
}

export default App;
