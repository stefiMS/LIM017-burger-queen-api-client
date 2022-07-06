import React, { useState } from "react";
import { ListUsers } from "./ListUsers";
import { useNavigate } from "react-router";
import logoBurguer from "./../../Assets/logoBurguer.png";
import { createNewUsers } from "../../util/getUsers";

export const UserManagement = () => {

    const [fullName, setFullName] = useState ('');
    // const [userId, setUserId] =useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rolUser, setRolUser] = useState({});
    
    const navigate = useNavigate("");
    // const initialCreateUser = {
    //     fullName: "",
    //     userId: "",
    //     email: "",
    //     Password:"",
    //     userRol:"",
    //   };
    // const [createUser, setCreateUser] = useState(initialCreateUser)

    // const {fullName, userId, email, password, userRol } = createUser;

    // const handleInputRol = ({ target }) => {
    //     setCreateUser({
    //       ...createUser,
    //       ...target.value,
    //     });
    //   };



    //Función para crear roles de usuario
    //   const objCreation = (objValues) => {
    //     let employeeRol;
    //     switch (rol) {
    //       case 'admin':
    //         employeeRol = { admin: true };
    //         break;
    //       case 'kitchen':
    //         employeeRol = { kitchen: true };
    //         break;
    //       case 'waiter':
    //         employeeRol = { waiter: true };
    //         break;
    //       default:
    //         employeeRol = { waiter: true };
    //         break;
    //     }
    //     return {
    //         email: objValues.email,
    //         password: objValues.password,
    //         roles: selectedRol,
    //       };
    //     };

    
       
   

    //Function create User

    const addToNewUser = (e) =>{
        e.preventDefault();
        const createNewUser ={
            // fullname: createUser.fullName,
            // userId: createUser.userId,
            // email:  createUser.email,
            // password: createUser.password,
            // userRol: createUser.userRol,
            fullname: fullName,
            // userId: userId,
            email:  email,
            // password: password,
            userRol: rolUser,
        }
        // console.log(createNewUser)
        createNewUsers (createNewUser)
          .then((res) => {
            // localStorage.setItem("accessToken", res);
            console.log(res)
          })
    }

    return (
        <section id="sectionUserManagement">
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
            <h2 id='titleUserManagement'>GESTIÓN DE USUARIOS</h2>
            <section id="sectionUserCreate">
                <h3 id='titleUserCreate'>Creación de usuarios</h3>
                <section className="containerCreateUser">
                    <div className="rowInputs">
                        <label to='nameUserNew' className="titleLabel">Nombres y apellidos:</label>
                        <input 
                          type='text'
                          placeholder='Nombres y apellidos'
                          id='nameUserNew'
                          className='inputCreate'
                        //   value={createUser.fullName}
                          value={fullName}
                        //   onChange = {handleInputRol}
                          onChange = {(e) => setFullName(e.target.value) }
                        />
                        {/* <label to='userId' className="titleLabel">ID de Usuario:</label>
                        <input
                          type='text'
                          placeholder='UserID'
                          id='userId'
                          className="inputCreate"
                          value={userId}
                          onChange = {(e) => setUserId(e.target.value) }
                        /> */}
                        <label to='rolUsers' className="titleLabel">Rol de Usuario:</label>
                        <select 
                          type='text'
                          placeholder='Rol de Usuario'
                          id='rolUsers'
                          className="inputCreate"
                          onChange = {(e) => setRolUser(e.target.value) }
                        >
                                <option value="null" > -- </option>
                                <option value="Mesero"> Mesero </option>
                                <option value="Cocinero"> Cocinero </option>
                                <option value="Administrador"> Administrador </option>
                                
                        </select>
                    </div>
                    <div className="rowInputs">
                        <label to='emailUser' className="titleLabel">Correo Electrónico:</label>
                        <input
                          type='email'
                          placeholder='Email de Usuario'
                          id='emailUser'
                          className="inputCreate"
                        //   value={createUser.email}
                          value={email}
                        //   onChange = {handleInputRol}
                          onChange = {(e) => setEmail(e.target.value) }
                        />
                        <label to='passwordUser' className="titleLabel">Contraseña</label>
                        <input 
                          type='password'
                          placeholder='Contraseña'
                          id='passwordUser'
                          className="inputCreate"
                        //   value={createUser.contraseña}
                          value={password}
                        //   onChange = {handleInputRol}
                          onChange = {(e) => setPassword(e.target.value) }
                        />
                    </div>
                    {/* <div className="rowRolUser">
                        <label to='rolUsers' className="titleLabelUser">Rol de Usuario:</label>
                        <select 
                          type='text'
                          placeholder='Rol de Usuario'
                          id='rolUsers'
                        onChange = {(e) => setRolUser(e.target.value) }
                        >
                                <option value="null" > -- </option>
                                <option value="Mesero"> Mesero </option>
                                <option value="Cocinero"> Cocinero </option>
                                <option value="Administrador"> Administrador </option>
                                
                        </select>
                    </div> */}
                    <button
                      id='buttonCreateUser'
                      onClick={addToNewUser}
                    >
                      CREAR USUARIO
                    </button>
                    <hr/>
                </section>
            </section>
            <ListUsers/>     
        </section>
    
    )
}