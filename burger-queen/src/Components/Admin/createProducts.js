import React from "react";

export const CreateProducts = () => {

  return (
    <section id="sectionTableUsers">
      <table className="table table-warning table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Nombre de Producto</th>
            <th scope="col">Precio</th>
            <th scope="col">Imagen</th>
            <th scope="col">Tipo</th>
            <th scope="col" colspan="2">
              Icons
            </th>
            {/* <th scope="col">Icons</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>mesero</td>
            <td>@mdo</td>
            <td>*******</td>
            <td>
              <i className="fa-solid fa-pen-to-square"></i>
            </td>
            <td>
              <i className="fa-regular fa-trash-can"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
