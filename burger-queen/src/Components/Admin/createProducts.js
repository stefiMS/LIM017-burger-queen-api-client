import React, { useState } from "react";
import { createNewProduct } from "../../util/getProducts";

export const CreateProducts = () => {
  const [ productName, setProductName ] = useState('');
  const [ productPrice, setProductPrice ] = useState('');
  const [ productImg, setProductImg ] = useState('');
  const [ productType, setProductType ] = useState('');

  return (
    <>
      <h3 id="titleUserCreate">Creación de productos</h3>
      <section className="containerCreateProduct">
        <div className="rowInputs">
          {/* <label to="userId" className="titleLabel">
            ID de Producto:
          </label>
          <input
            type="text"
            placeholder="productID"
            id="productId"
            className="inputCreate"
          /> */}
          <label to="nameProductNew" 
            className="titleLabel" 
            id ="creatProductName" >
              Nombre de Producto:
          </label>
          <input
            type="text"
            placeholder="Nombre de Producto"
            id="nameProductNew"
            className="inputCreate"
            name= "productName"
            value= {productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="rowInputs">
          <label to="productPrice" className="titleLabel">
            Precio:
          </label>
          <input
            type="text"
            placeholder="Precio"
            id="productPrice"
            className="inputCreate"
            name= "productPrice"
            value= {productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
          <label to="productImg" className="titleLabel">
            Imagen
          </label>
          <input
            type="text"
            placeholder="URLimagen/jpg"
            id="productImg"
            className="inputCreate"
            name= "productImg"
            value= {productImg}
            onChange={(e) => setProductImg(e.target.value)}
          />
        </div>
        <div className="rollProductType">
          <label to="productType" className="titleLabelProduct">
            Tipo de producto:
          </label>
          <select
            placeholder="Tipo de producto"
            id="productType"
            name="productType"
            onChange={(e) => setProductType(e.target.value)}>
              <option value="null"> -- </option>
              <option value="Breakfast"> Desayuno </option>
              <option value="Dinner"> Alm/Cena </option>
          </select>
        </div>
        <button id="buttonCreatProduct"
        onClick = { (e) => {
          e.preventDefault();
          const postNewProduct = {
            name: productName,
            price: productPrice,
            image: productImg,
            type: productType,
            dataEntry: new Date().toISOString(),
          };
          createNewProduct(postNewProduct)
            .then((response) =>{
              alert("Producto creado con éxito")
              window.location.reload(false)
            })
            .catch((error) => console.log)
        }}
        >
          AGREGAR PRODUCTO
        </button>
        <hr />
      </section>
    </>
  );
};
