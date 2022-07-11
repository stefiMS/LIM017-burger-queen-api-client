import React from "react";
import logoBurguer from "./../Assets/logoBurguer.png";
import { useState } from "react";
import { authentication } from "../util/Authentication.js";
import { useNavigate } from "react-router-dom";
 
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = (e) =>{
      e.preventDefault();
      authentication(email, password)
        .then((response) => {
          // if(email === '' || password === ''){
          //   const message = document.createElement('p');
          //   const showMessage =message.setAttribute('class','showMessage')
          //   showMessage.textContent = 'Debes completar todos los campos solicitados';
          // }else{
           localStorage.setItem("accessToken", response);
          navigate("/home");
          // }
        })
        .catch((error) => console.log(error));
  }

 
  return (
    <>
      <header>
        <img src={logoBurguer} id="logoBurguer" alt="logoBurguer" />
      </header>
      <main>
        <div id="containerLogin">
          <form
            onSubmit={ handleSubmit}
          >
            <label className = "loginLabel">USUARIO</label>
            <input
              name="email"
              type="text"
              placeholder="Ingrese su usuario"
              className="inputLogin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* <p> resultado: {email}</p> */}

            <label className ="loginLabel">CONTRASEÑA</label>

            <input
              name="password"
              type="password"
              placeholder="Ingrese contraseña"
              className="inputLogin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p ></p>
            <p></p>
            <button type="submit" id="buttonLogin" className="btn btn-warning">
              INICIAR SESIÓN
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
