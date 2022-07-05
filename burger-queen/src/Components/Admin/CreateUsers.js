import React from "react";

export const CreateUsers = () => {

return (
<section id='sectionTableUsers'>
   <table className="table table-warning table-striped table-hover">
    <thead>
        <tr>
            <th scope="col">UserID</th>
            <th scope="col">Nombres y Apellidos</th>
            <th scope="col">Roles</th>
            <th scope="col">Correo</th>
            <th scope="col">Contraseña</th>
            <th scope="col" colSpan="2">Icons</th>
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
            <td><i className="fa-solid fa-pen-to-square"></i></td>
            <td><i className="fa-regular fa-trash-can"></i></td>
        </tr>
    </tbody>
   </table>
</section>

)}