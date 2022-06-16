import React from 'react';
import logoBurguer from './../Assets/logoBurguer.png';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
   Routes,
   // Switch,
   Route,
// Link
} from "react-router-dom";







const login = () =>{

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   return (
      <>
         <header>
            <img src={logoBurguer} id='logoBurguer' alt='logoBurguer' />
         </header>
         <main>
            <div id='containerLogin'>
               <form
                onSubmit= {(e) => {
                  e.preventDefault();
                  const navigate = useNavigate();
                  axios.post('http://localhost:3001/auth', {email, password})
                  .then((response) => {
                     const { status } = response
                     const { token } = response.data
                     if (status === 200){
                        // <routes> <Route path='/Home'  element={ <Home/>}/></routes>
                        navigate("/home");
                        // console.log(response.data)
                     }
                        
                     }
                  )
                     .catch((error)  => {
                     console.log('errorcito');
                  })
               }
               } 
               >

                  <label>USUARIO</label>
                  <input
                     name='email'
                     type='text'
                     placeholder='Ingrese su usuario'
                     className='inputLogin'
                     value= {email}
                     onChange={(e) => setEmail(e.target.value)}
                     />
                     <p> resultado: {email}</p>

                  <label>CONTRASEÑA</label>

                  <input
                     name='password'
                     type='password'
                     placeholder='Ingrese contraseña'
                     className='inputLogin'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}

                  />
            <button
               type='submit'
               id='buttonLogin'
               className='btn btn-warning'
               >
               INICIAR SESIÓN
               </button>
               </form>
               </div>
         </main>
      </>
   )


//<routes> <Route path='/Home'  element={ <Home/>}/></routes>


};

export default  login;


