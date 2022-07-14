// import logo from './logo.svg';
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login.js";
import { RoutesUser } from "./RoutesUser";
// import Menu from "./Components/Menu.js";
// import Orders from "./Components/Orders.js";
// import { ErrorNoAccess } from "./Components/ErrorNoAccess.js";
// import { UserManagement } from "./Components/Admin/UserManagement";
// import { Products } from "./Components/Products";
// import { Home } from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/*' element={<RoutesUser/>} />
      </Routes>
    </div>
  );
}

export default App;
