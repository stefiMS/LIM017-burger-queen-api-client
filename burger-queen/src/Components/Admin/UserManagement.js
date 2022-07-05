import React from "react";
import { CreateUsers } from "./CreateUsers";
import { useNavigate } from "react-router";
import logoBurguer from "./../../Assets/logoBurguer.png";

export const UserManagement = () => {

    const navigate = useNavigate("");

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
                        <input type='text' placeholder='Nombres y apellidos' id='nameUserNew' className='inputCreate'/>
                        <label to='userId' className="titleLabel">ID de Usuario:</label>
                        <input type='text' placeholder='UserID' id='userId' className="inputCreate"/>
                    </div>
                    <div className="rowInputs">
                        <label to='emailUser' className="titleLabel">Correo Electrónico:</label>
                        <input type='email' placeholder='Email de Usuario' id='emailUser' className="inputCreate" />
                        <label to='passwordUser' className="titleLabel">Contraseña</label>
                        <input type='password' placeholder='Contraseña' id='passwordUser' className="inputCreate" />
                    </div>
                    <div className="rowRolUser">
                        <label to='rolUser' className="titleLabelUser">Rol de Usuario:</label>
                        <select type='text' placeholder='Rol de Usuario' id='rolUser' >
                                <option value="null" selected> -- </option>
                                <option value="Mesero"> Mesero </option>
                                <option value="Cocinero"> Cocinero </option>
                                <option value="Administrador"> Administrador </option>
                                
                        </select>
                    </div>
                    <button id='buttonCreateUser'>CREAR USUARIO</button>
                    <hr/>
                </section>
            </section>
            <CreateUsers/>
    
    
        </section>
    
    )
}