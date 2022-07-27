import React, { useState } from "react";
import logoBurguer from "./../Assets/logoBurguer.png";
import { authentication } from "../util/Authentication.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = (e) =>{
      e.preventDefault();
      console.log('hhhhh')
      authentication(email, password)
        .then((response) => {
          console.log('hola')
          localStorage.setItem("accessToken", response);
          navigate("/home");
        })
        .catch((error) =>
        { console.log('err')
          console.log(error)});
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
