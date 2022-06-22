
import logoBurguer from './../Assets/logoBurguer.png'
import Breakfast from './Breakfast';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Routes } from 'react-router';
import React, { useState, useEffect } from "react";
import { getProductsData } from "../util/getProducts";

 
const Home = () => {
  const [products, setProducts] = useState([]);
  // const navigate = useNavigate("");
  useEffect(() => {
    const getBreakfastProducts = () => {
      getProductsData()
        .then((response) => {
          setProducts(response);
        })
        .catch((error) => console.log(error));
    };
 
    getBreakfastProducts();
  }, []);
 
  console.log(products);
 
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
       {/* <main id="menuContainer"> */}
        {/* <section id="menu">
            <div className="buttonsType">
              {/* <Routes> */}
            {/* <Link to="/Breakfast">
              <button className="buttonMeal" 
              id="btnBreakfast" 
              onClick={(e)=>{
                e.preventDefault;
                 */}
                // navigate("/Breakfast")
              {/* </Link> */}
              {/* </Routes>
              <button className="buttonMeal" id="btnMenu" 
              onClick={(e) => {
                e.preventDefault;
                navigate("/Dinner")
              }}> Almuerzo/Cena</button>
            </div> */}
            {/* <Breakfast/> */}
        {/* </section>
        
        <section id= 'section-ticket'>
            <div>
                <h3> Aqui se renderiza el ticket </h3>
            </div>
        </section>
      </main>  */}

      
      {/* </section> */}
      <section id="menu">
        <div>
          <h3> Aqui van los items del desayuno o almuerzo</h3>
          {products.map((item) => {
            console.log(`Entered ${item.id}`);
            return (
              <p key={item.id}>
                {item.id} | {item.name} | {item.price}
              </p>
            );
          })}
        </div>
      </section>
      <section id="section-ticket">
        <div>
          <h3> Aqui se renderiza el ticket </h3>
        </div>
     </section>
    </>
  );
};

export default Home;
 