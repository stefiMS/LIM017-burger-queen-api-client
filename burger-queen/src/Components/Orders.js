import React, { useEffect, useState } from "react";
import logoBurguer from "./../Assets/logoBurguer.png";

import { useNavigate } from "react-router-dom";
import { OrderStatus }  from "./orders/Status.js"


const Orders = () => {
  const navigate = useNavigate("");
  
  return (
    <>
     <header id="loginHeader">
        <nav id="loginNav">
          <img src={logoBurguer} id="logoBurguerNav" alt="logoBurguer" 
          onClick={ () => navigate("/home")}/>
          <ul id="optionNav">
              <li onClick={() => navigate("/menu")}>MENÚ</li>
              <li onClick={() => navigate("/orders")}>PEDIDOS</li>
              <li onClick={() => navigate("/products")}>PRODUCTOS</li>
              <li onClick={() => navigate("/userManagement")}>GESTIÓN DE USUARIOS</li>
          </ul>
        </nav>
      </header>
      <main>
        <OrderStatus/>
      </main>
    </>
  );
};

export default Orders;
