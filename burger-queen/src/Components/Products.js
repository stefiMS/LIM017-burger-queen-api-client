import React, { useEffect, useState } from 'react';
import logoBurguer from "./../Assets/logoBurguer.png";
import { useNavigate } from 'react-router';


export const Products = () => {
  const navigate = useNavigate("");

  return(
    <>
    <header id="loginHeader">
        <nav id="loginNav">
          <img src={logoBurguer} id="logoBurguerNav" alt="logoBurguer" />
          <ul id="optionNav">
              <li onClick={() => navigate("/menu")}>MENÚ</li>
              <li onClick={() => navigate("/orders")}>PEDIDOS</li>
              <li onClick={() => navigate("/products")}>PRODUCTOS</li>
              <li onClick={() => navigate("/userManagement")}>GESTIÓN DE USUARIOS</li>
          </ul>
        </nav>
      </header>
    <main>
      <h2>aqu iran todos los productos</h2>
    </main>

    </>
)
}

