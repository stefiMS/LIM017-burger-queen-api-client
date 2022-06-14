import React from 'react'
// import './App.css';
import logoBurguer from './../Assets/logoBurguer.png'
  
 const login = () =>{
    
    return (
        <>
          <header>
             <img src={logoBurguer} id='logoBurguer' alt='logoBurguer' />
          </header>
          <main>
             <div id='containerLogin'>
                <label>USUARIO</label>
                <input type='text'  placeholder='Ingrese su usuario' className='inputLogin'/>
                <label>CONTRASEÑA</label>
                <input type='password' placeholder='Ingrese contraseña' className='inputLogin'/>
             </div>
             {/* <button id='buttonLogin'>INICIAR SESIÓN</button> */}
             <button type="button" id="buttonLogin" class="btn btn-warning">INICIAR SESIÓN</button>
          </main>
        </>
    )
 } 
 
 export default  login;
