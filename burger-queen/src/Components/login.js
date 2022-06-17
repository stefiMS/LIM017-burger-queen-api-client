import React from 'react';
import logoBurguer from './../Assets/logoBurguer.png';
import { useState } from 'react';
import axios from 'axios';

// const baseUrl = 'http://localhost:3001';


const login = () =>{

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   // const {errorMsg} = validateInput(email, password);
//    const handleSubmit = (e) =>{
//       e.preventDefault();
//       axios.post('http://localhost:3001/auth')
//           .then((response) => {
//               console.log(response);
//           })
//           .catch((error)  => {
//               console.log(error)
//           })
//   }
const goToHome=  (e) => {
   e.preventDefault();
   axios.post('http://localhost:3001/auth', {email, password})
      .then((response) => {
        
         const { status } = response
         const { token } = response.data
         if (status === 200){
            // poner ruteo
            console.log(response.data)
         }
      })
      .catch((error)  => {
         console.log('errorsote')
      })
   //  logearse(email,password);
   };


   return (
      <>
         <header>
            <img src={logoBurguer} id='logoBurguer' alt='logoBurguer' />
         </header>
         <main>
            <div id='containerLogin'>
               <form
               // 
               //    onSubmit= { (e) => {
               //       e.preventDefault();
               //       axios.post('http://localhost:3001/auth', {email, password})
               //          .then((response) => {
                          
               //             const { status } = response
               //             const { token } = response.data
               //             if (status === 200){
               //                // poner ruteo
               //                console.log(response.data)
               //             }
               //          })
               //          .catch((error)  => {
               //             console.log('errorsote')
               //          })
               //       //  logearse(email,password);
               //    }}
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
               onSubmit= {() => {
                  goToHome
               }}
               >
               INICIAR SESIÓN</button>
               </form>
               </div>
         </main>
      </>
   )
};


export default  login;
