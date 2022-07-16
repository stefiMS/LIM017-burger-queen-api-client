import React from "react";
import logoBurguer from "./../Assets/logoBurguer.png";
import { useNavigate } from "react-router";

export const NavBar = () => {
  const navigate = useNavigate("");

  return (
    <nav id="loginNav">
      <img
        src={logoBurguer}
        id="logoBurguerNav"
        alt="logoBurguer"
        onClick={() => navigate("/home")}
      />
      <ul id="optionNav">
        <li onClick={() => navigate("/menu")}>MENÚ</li>
        <li onClick={() => navigate("/orders")}>PEDIDOS</li>
        <li onClick={() => navigate("/products")}>PRODUCTOS</li>
        <li onClick={() => navigate("/userManagement")}>GESTIÓN DE USUARIOS</li>
      </ul>
    </nav>
  );
};
