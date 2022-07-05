import React from "react";
import { CreateProducts } from "./Admin/createProducts";
import { useNavigate } from "react-router";
import logoBurguer from "./../Assets/logoBurguer.png";

export const Products = () => {

    const navigate = useNavigate("");

    return (
        <section id="sectionProductManagement">
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
            <h2 id='titleProductManagement'>GESTIÓN DE PRODUCTOS</h2>
            <section id="sectionProductCreate">
                <h3 id='titleUserCreate'>Creación de productos</h3>
                <section className="containerCreateProduct">
                    <div className="rowInputs">
                    <label to='userId' className="titleLabel">ID de Producto:</label>
                        <input type='text' placeholder='productID' id='productId' className="inputCreate"/>
                        <label to='nameProductNew' className="titleLabel">Nombre de Producto:</label>
                        <input type='text' placeholder='Nombre de Producto' id='nameProductNew' className='inputCreate'/>

                    </div>
                    <div className="rowInputs">
                        <label to='productPrice' className="titleLabel">Precio:</label>
                        <input type='text' placeholder='Precio' id='productPrice' className="inputCreate" />
                        <label to='productImg' className="titleLabel">Imagen</label>
                        <input type='text' placeholder='URLimagen/jpg' id='productImg' className="inputCreate" />
                    </div>
                    <div className="rowRolUser">
                        <label to='productType' className="titleLabelProduct">Tipo de producto:</label>
                        <select type='text' placeholder='Tipo de producto' id='productType' >
                                <option value="null" selected> -- </option>
                                <option value="Breakfast"> Desayuno </option>
                                <option value="Dinner"> Alm/Cena </option>
                        </select>
                    </div>
                    <button id='buttonCreatProduct'>AGREGAR PRODUCTO</button>
                    <hr/>
                </section>
            </section>
            <CreateProducts/>
    
    
        </section>
    
    )
}