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
            <li onClick={() => navigate("/home")}>Home</li>
            <li onClick={() => navigate("/orders")}>Orders</li>
            <li onClick={() => navigate("/pedidos")}>Pedidos</li>
          </ul>
        </nav>
      </header>
    <main>
      <h2>aqu iran todos los productos</h2>
    </main>

    </>
)
}

