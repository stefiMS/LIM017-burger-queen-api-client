import React from 'react';
import { useNavigate } from 'react-router';
import  noAccess  from './../Assets/noAccess.png'

export const ErrorNoAccess =  () => {

  const navigate = useNavigate();

  return(
    <div className='sectionError'>
      <p id='noAccessText'>Usuario No autorizado, no tienes permiso de acceso</p>
      <img src={noAccess} id='imageNoAccess' alt='noAccess' /> 
      <button id='noAccessButton'
        onClick={() => {
          navigate('/');
        }}
      >Volver</button>
    </div>
  )
}

export default Error;

