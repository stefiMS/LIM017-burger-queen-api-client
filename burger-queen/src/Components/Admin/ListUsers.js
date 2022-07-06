import React from "react";
import { useState } from "react";


export const ListUsers = () => {

const [createUser, setCreateUser] = useState({});

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
            <th scope="col" colspan="2">Acciones</th>
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