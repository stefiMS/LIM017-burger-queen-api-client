import React, { useEffect } from "react";
import { useState } from "react";
import { getUsers } from "../../util/getUsers";
import { updateUser } from "../../util/getUsers";
// import { Modal, Button, TextField } from '@mui/material';
// import { makeStyles} from '@emotion/styled';

export const ListUsers = () => {
    //hook que captura el usuario agregado
    const [createUser, setCreateUser] = useState([]);
     
    useEffect(() =>{
        const showUserList = () => {
            getUsers()
            .then((res) => setCreateUser (res))
            .catch((err) => console.log(err))
        }
        showUserList();
    },[])

        /* para actualizar información*/

        const initialUserCreate = {
            email: "",
            password: "",
            rolUser: '',
          };
        //hook que captura los valores del usuario creado 
        const [currentUserCreated, setCurrentUserCreated] = useState(initialUserCreate)
        //hook para capturar id del usuario a actualizar
        const [modalEdit, setModalEdit] = useState(false);
        const [modalDelete, setModalDelete] = useState(false);
                
        const handleChange = (e) =>{
            const {name, value}=e.target;
            setCurrentUserCreated( prevState=>({
              ...prevState,
              [name]: value
            }))
            console.log(currentUserCreated);
          }


          // funcion para ejecutar peticion de actualizacion
        // const updateDataUser = () => {
        //     const userObj = {
        //     email: email,
        //     password: password,
        //     roles: rolUser,
        //     // id: idUser,
        //     };
        //     updateUser(userObj)
        //     .then(() => {
        //         // setShowBtn(false);
        //         setEditUserId(true);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
        // };
        
       
        const  updateDataUser = () => {
        
            updateUser()
            .then((res) =>{
                const newData = createUser;
                newData.map((user) => {
                
                   if(currentUserCreated.id===user.id) {
                        user.email=currentUserCreated.email;
                        user.password=currentUserCreated.password;
                        user.rolUser=currentUserCreated.rolUser;
                    }
                   
                })
                setCreateUser(newData);
                openCloseModalEdit();
            })
            .catch((e) => console.log(e))
        }

        const openCloseModalEdit=()=>{
            setModalEdit(!modalEdit);
        }

        const openCloseModalDelete=()=>{
            setModalDelete(!modalDelete);
          }

        // const bodyModalEdit= (
        //     <div /*className={styles.modal}*/   className= 'modalEdit'>
        //        <h3>Editar Usuarios</h3>
        //        <TextField 
        //           name="email"
        //         //   className={styles.inputMaterial}
        //           label="Correo Electrónico"
        //           onChange={handleChange}
        //           value={currentUserCreated && currentUserCreated.email}/>
        //        <br />
        //        <TextField
        //           name="password"
        //         //   className={styles.inputMaterial}
        //           label="Contraseña"
        //           onChange={handleChange}
        //           value={currentUserCreated && currentUserCreated.password}/>
        //        <br />
        //        <TextField
        //           name="rolUser"
        //         //   className={styles.inputMaterial}
        //           label="Rol de Usuario"
        //           onChange={handleChange}
        //           value={currentUserCreated && currentUserCreated.rolUser}/>
        //        <br /><br />
        //        <div align="right">
        //             <Button color="primary" onClick={()=>updateDataUser()}>Editar</Button>
        //             <Button onClick={()=>openCloseModalEdit()}>Cancelar</Button>
        //        </div>
        //     </div>
        // )

        const userSelect=(user, caso)=>{
            setCurrentUserCreated(user);
            (caso==='edit')?openCloseModalEdit():openCloseModalDelete()
          }




    return (
    <>
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
                        <td>{user.rolUser}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td><button  onClick={()=> userSelect(user, 'edit')}><i className="fa-solid fa-pen-to-square" ></i></button></td>
                        <td><button onClick={()=> userSelect(user, 'delete')}><i className="fa-regular fa-trash-can" ></i></button></td>
                    </tr>
                    
                    )}
                )}
            </tbody>
        </table>
        {/* <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
               <h3>Editar Usuarios</h3>
               <form>
                 <div className="mb-3">
                    <label htmlFor="emailUser" className="col-form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" name="email" id="emailUpdate" value={currentUserCreated && currentUserCreated.email} onChange={handleChange}/>
                 </div>
                 <div className="mb-3">
                    <label htmlFor="passwordUser" className="col-form-label">Contraseña</label>
                    <input type="password" className="form-control" name="password" id="passwordUpdate" onChange={handleChange} value={currentUserCreated && currentUserCreated.password}/>
                 </div>
                 <div className="mb-3">
                    <label to='rolUsers' className="titleLabelUser" >Rol de Usuario:</label>
                    <select 
                          type="text"
                          placeholder="Rol de Usuario"
                          id="rolUserUpdate"
                          name="rolUser"
                          onChange={handleChange} 
                    >
                                <option value="null" > -- </option>
                                <option value="waiter"> Mesero </option>
                                <option value="kitchen"> Cocinero </option>
                                <option value="admin"> Administrador </option>
                                
                    </select>
                 </div>
                 <div >
                    <button type="button" className="btn btn-primary" onClick={()=>updateDataUser()}>Editar</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>openCloseModalEdit()}>Cancelar</button>
                 </div>
               </form>
            </div>
        </div> */}

{/* 
               <TextField 
                  name="email"
                  label="Correo Electrónico"
                  onChange={handleChange}
                  value={currentUserCreated && currentUserCreated.email}/>
               
               <TextField
                  name="password"
                  label="Contraseña"
                  onChange={handleChange}
                  value={currentUserCreated && currentUserCreated.password}/>
            
               <TextField
                  name="rolUser"
                  label="Rol de Usuario"
                  onChange={handleChange}
                  value={currentUserCreated && currentUserCreated.rolUser}/>
               
               <div align="right">
                    <Button color="primary" onClick={()=>updateDataUser()}>Editar</Button>
                    <Button onClick={()=>openCloseModalEdit()}>Cancelar</Button>
               </div>

            </div>
        </div> */}



        {/* <Modal
            open={modalEdit}
            onClose={openCloseModalEdit}>
                {bodyModalEdit}
        </Modal> */}
    </section>
    <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
               <h3>Editar Usuarios</h3>
               <form>
                 <div className="mb-3">
                    <label htmlFor="emailUser" className="col-form-label">Correo Electrónico</label>
                    <input type="email" className="form-control" name="email" id="emailUpdate" value={currentUserCreated && currentUserCreated.email} onChange={handleChange}/>
                 </div>
                 <div className="mb-3">
                    <label htmlFor="passwordUser" className="col-form-label">Contraseña</label>
                    <input type="password" className="form-control" name="password" id="passwordUpdate" onChange={handleChange} value={currentUserCreated && currentUserCreated.password}/>
                 </div>
                 <div className="mb-3">
                    <label to='rolUsers' className="titleLabelUser" >Rol de Usuario:</label>
                    <select 
                          type="text"
                          placeholder="Rol de Usuario"
                          id="rolUserUpdate"
                          name="rolUser"
                          onChange={handleChange} 
                    >
                                <option value="null" > -- </option>
                                <option value="waiter"> Mesero </option>
                                <option value="kitchen"> Cocinero </option>
                                <option value="admin"> Administrador </option>
                                
                    </select>
                 </div>
                 <div >
                    <button type="button" className="btn btn-primary" onClick={()=>updateDataUser()}>Editar</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>openCloseModalEdit()}>Cancelar</button>
                 </div>
               </form>
            </div>
        </div>

    </>

)}