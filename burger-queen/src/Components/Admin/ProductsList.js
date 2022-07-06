import React, { useEffect, useState } from "react";
import { getProductsData } from "../../util/getProducts";

export const ProductsList = () => {

  const [productsList, setProductsList]  = useState([])

  useEffect (() => {
    const showProductsList = () =>{
      getProductsData()
        .then((response) => setProductsList(response))
        .catch((error) => console.log(error))
    }
    showProductsList();
  }, [])

  return (
    <section id="sectionTableProducts">
      <table className="table table-warning table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Nombre de Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Imagen</th>
            <th scope="col">Tipo</th>
            <th scope="col" colSpan="2">
              Icons
            </th>
            {/* <th scope="col">Icons</th> */}
          </tr>
        </thead>
        <tbody>
            {productsList.map((product) =>{
              return (
                <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.image}</td>
                <td>{product.type}</td>
                <td>
                  <i className="fa-solid fa-pen-to-square"></i>
                </td>
                <td>
                  <i className="fa-regular fa-trash-can"></i>
                </td>
                </tr>
              )}
            )}
        </tbody>
      </table>
    </section>
  );
};
