import logoBurguer from './../Assets/logoBurguer.png'
import React from "react";
import { ProductItem } from './Shop/ProductItem';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const Menu = () => {

  const navigate = useNavigate ('')

  return (
    <>
    <header id="loginHeader">
      <nav id="loginNav">
        <img src={logoBurguer} id="logoBurguerNav" alt="logoBurguer" />
        <ul id="optionNav">
          <li><Link to="/menu">MENÚ</Link></li>
          <li><Link to="/orders">PEDIDOS</Link></li>
          <li><Link to="/products">PRODUCTOS</Link></li>
          <li><Link to="/userManagement">GESTIÓN DE USUARIOS</Link></li>
        </ul>
      </nav>
      
    </header>
    <main id="menuContainer">
          <ProductItem/>
    </main>

  </>
);
};

export default Menu;
