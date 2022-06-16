// import logo from './logo.svg';
import React from 'react'
import {
  Routes,
  // Switch,
  Route,
  // Link
} from "react-router-dom";

import './App.css';
import Login from './Components/Login.js';
import Home from './Components/Breakfast.js';

function App() {
  return (
   
      <div className="App">
        {/* <h1>Burger Queeny</h1> */}
        {/* <hr/> */}
        <Routes>
          
              {/* <Login></Login> */}
            {/* </Route> */}
          {/* <Switch> */}
          <Route path='/'element={<Login />}/>
            <Route path='/Home'  element={ <Home/>}>
              {/* <h1>Esta es la página de desayuno</h1> */}
            </Route>
          
            <Route path='/'element={<Login />}/>
        {/* </Switch> */}
        
        </Routes>
      </div>
   
      
  );
}

export default App;
