import React from 'react';
import logoBurguer from './../Assets/logoBurguer.png'
import Breakfast from './Breakfast';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Routes } from 'react-router';

const Home = () => {
  const navigate = useNavigate("");

  // const fnBreakfast = () => useNavigate("/Breakfast")

  // const fnDinner = () =>{

    
  // }

  return (
    <>
      <header id="loginHeader">
        <nav id="loginNav">
          <img src={logoBurguer} id="logoBurguerNav" alt="logoBurguer" />
          <ul id="optionNav">
            <li>Home</li>
            <li>Orders</li>
            <li>Table</li>
          </ul>
        </nav>
      </header>
      <main id="menuContainer">
        <section id="menu">
            <div className="buttonsType">
              {/* <Routes> */}
            <Link to="/Breakfast">
              <button className="buttonMeal" 
              id="btnBreakfast" 
              onClick={(e)=>{
                e.preventDefault;
                
                // navigate("/Breakfast")
              }}> Desayuno </button>
              </Link>
              {/* </Routes> */}
              <button className="buttonMeal" id="btnMenu" 
              onClick={(e) => {
                e.preventDefault;
                navigate("/Dinner")
              }}> Almuerzo/Cena</button>
            </div>
            <Breakfast/>
        </section>
        
        <section id= 'section-ticket'>
            <div>
                <h3> Aqui se renderiza el ticket </h3>
            </div>
        </section>
      </main>
    </>
  );
};

export default Home;