import React from "react";
import { ProductsList } from "./Admin/ProductsList";
import { useNavigate } from "react-router";
import logoBurguer from "./../Assets/logoBurguer.png";
import { CreateProducts } from "./Admin/CreateProducts";

export const Products = () => {
  const navigate = useNavigate("");

  return (
    <>
      <section id="sectionProductManagement">
        <header id="loginHeader">
          <nav id="loginNav">
            <img src={logoBurguer} id="logoBurguerNav" alt="logoBurguer" />
            <ul id="optionNav">
              <li onClick={() => navigate("/menu")}>MENÚ</li>
              <li onClick={() => navigate("/orders")}>PEDIDOS</li>
              <li onClick={() => navigate("/products")}>PRODUCTOS</li>
              <li onClick={() => navigate("/userManagement")}>
                GESTIÓN DE USUARIOS
              </li>
            </ul>
          </nav>
        </header>
        <h2 id="titleProductManagement">GESTIÓN DE PRODUCTOS</h2>
        <section id="sectionProductCreate">
          <CreateProducts />
        </section>
      </section>
      <section>
        <ProductsList />
      </section>
    </>
  );
};
