import React, { useEffect } from "react";
import { useState } from "react";
import { getUsers } from "../../util/getUsers";


export const ListUsers = () => {

const [createUser, setCreateUser] = useState([]);

useEffect(() =>{
    const showUserList = () => {
        getUsers()
          .then((res) => setCreateUser (res))
          .catch((err) => console.log(err))
    }
    showUserList();
},[])

return (
<section id='sectionTableUsers'>
   <table className="table table-warning table-striped table-hover showList">
    <thead>
        <tr>
            <th scope="col">UserID</th>
            {/* <th scope="col">Nombres y Apellidos</th> */}
            <th scope="col">Roles</th>
            <th scope="col">Correo</th>
            <th scope="col">Contraseña</th>
            <th scope="col" colspan="2">Acciones</th>
            {/* <th scope="col">Icons</th> */}
        </tr>
    </thead>
    <tbody>
      {createUser.map((user) => {
          return (
            <tr key={user.id}>
                <th scope="row">{user.id}</th>
                {/* <td>{user.fullName}</td> */}
                <td>{user.userRol}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td><i className="fa-solid fa-pen-to-square"></i></td>
                <td><i className="fa-regular fa-trash-can"></i></td>
            </tr>
            
            )}
        )}
    </tbody>
   </table>
</section>

)}