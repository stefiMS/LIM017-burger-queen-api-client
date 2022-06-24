import React from "react";
import logoBurguer from "./../Assets/logoBurguer.png";
import { useState } from "react";
import { authentication } from "../util/Authentication.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");

  return (
    <>
      <header>
        <img src={logoBurguer} id="logoBurguer" alt="logoBurguer" />
      </header>
      <main>
        <div id="containerLogin">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              authentication(email, password)
                .then((response) => {
                  localStorage.setItem("accessToken", response.accessToken);
                  navigate("/home");
                })
                .catch((error) => console.log(error));
            }}
          >
            <label>USUARIO</label>
            <input
              name="email"
              type="text"
              placeholder="Ingrese su usuario"
              className="inputLogin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p> resultado: {email}</p>

            <label>CONTRASEÑA</label>

            <input
              name="password"
              type="password"
              placeholder="Ingrese contraseña"
              className="inputLogin"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
