import React, { useEffect } from "react";
import { useState } from "react";
import { getUsers } from "../../util/getUsers";
import ReactModal from "react-modal";
import { updateUser } from "../../util/getUsers";

export const ListUsers = () => {

 //hooks para traer al usuario creado
    const [createUser, setCreateUser] = useState([]);

    useEffect(() =>{
        const showUserList = () => {
            getUsers()
            .then((res) => setCreateUser (res))
            .catch((err) => console.log(err))
        }
        showUserList();
    },[])


  /* EDITAR  USUARIOS CREADOS */
  //hook que permite mostrar el modal 
    const [showModal, setShowModal] = useState(false);
  // hook que permite editar el modal
    const [showEditModal, setShowEditModal] = useState(false);
  //hook que activa el producto
    const [activeUser, setActiveUser] =  useState({});
    
  //hook que captura los valores del usuario creado 
    const [editedUserEmail, setEditedUserEmail] = useState("");
    const [editedUserPassword, setEditedUserPassword] = useState("");
    const [editedUserRol, setEditedUserRol] = useState("");

    
    //     const initialUserCreate = {
    //         email: "",
    //         password: "",
    //         rolUser: '',
    //     };
    // const [currentUserCreated, setCurrentUserCreated] = useState(initialUserCreate)
  
    //hook para capturar id del usuario a actualizar
   
    const [modalDelete, setModalDelete] = useState(false);
         
    // const handleChange = (e) =>{
    //     const {name, value}=e.target;
    //     setCurrentUserCreated( prevState=>({
    //     ...prevState,
    //     [name]: value
    //     }))
    //     console.log(currentUserCreated);
    // }

 // Función que abre y cierra el modal
 
    const handleOpenModal = (user) => {
        setActiveUser(user);
        setShowModal(true);
    };

    const handleCloseModal = () =>{
        setShowModal(false);
    }

// Función que muestra el edit modal

    const handleEditOpenModal=(user)=>{
        setActiveUser(user);
        setShowEditModal(true)
    }

    const handleEditCloseModal=()=>{
        setShowEditModal(false);
    }

 // Función de botón que actualiza la información
    const editUpdate = (e) =>{
        e.preventDefault();
        const editRequest = {
          id: activeUser.id,
          email: editedUserEmail,
          password: editedUserPassword,
          roles: editedUserRol,
        };
        updateUser(editRequest)
          .then((response) => {
            console.log(response);
            alert(" usuario Editado con éxito");
            window.location.reload(false);
          })
          .catch((error) => console.log(error));
    }



    return (
    <>
        <ReactModal
           isOpen={showEditModal}
           ariaHideApp={false}
           contentLabel = "Modal Edit"
           onRequestClose={handleCloseModal}
           className="Modal"
           overlayClassName="OverlayDlt"
        >
            <h2>EDITAR USUARIOS</h2>
            Editar Usuario:
            {activeUser ? (
                <p>
                    {activeUser.id}, {activeUser.email}
                </p>
            ) :null }
            <div className=" divModalEdit rowInputs">
                <label to='emailUserEdit' className="titleLabel">Correo Electrónico:</label>
                <input
                  type='email'
                  placeholder={activeUser.email}
                  id='emailUserEdit'
                  name="email"
                  className="inputCreate"
                  value={editedUserEmail}
                  onChange = {(e) => setEditedUserEmail(e.target.value) }
                />
                <label to='passwordUserEdit' className="titleLabel">Contraseña</label>
                <input 
                  type='password'
                  placeholder= {activeUser.password}
                  id='passwordUserEdit'
                  name="password"
                  className="inputCreate"
                  value={editedUserPassword}
                  onChange = {(e) => setEditedUserPassword(e.target.value) }
                />
            </div>
            <div className="rowRolUser">
                <label to='rolUsers' className="titleLabelUser">Rol de Usuario:</label>
                <select 
                  type='text'
                  placeholder= {activeUser.roles}
                  id='rolUsers'
                  name='rolUser'
                  value={editedUserRol}
                  onChange={(e) => setEditedUserRol(e.target.value)}
                //   onChange = {(e) => setRolUser(e.target.value) }
                >
                    <option value="null" > -- </option>
                    <option value="waiter"> Mesero </option>
                    <option value="kitchen"> Cocinero </option>
                    <option value="admin"> Administrador </option>
                                
                </select>
            </div>
            <div>
              <button
                className="btnGoEdit"
                onClick={editUpdate}
              >
                Editar Usuario
              </button>
              <button onClick={handleEditCloseModal}>Cancelar</button>
            </div>
        </ReactModal>
    
        <section id='sectionTableUsers'>
            <table className="table table-warning table-striped table-hover showList">
                <thead>
                    <tr>
                        <th scope="col">UserID</th>
                        <th scope="col">Roles</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Contraseña</th>
                        <th scope="col" colspan="2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {createUser.map((user) => {
                    return (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
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
    
    </>

    

)}