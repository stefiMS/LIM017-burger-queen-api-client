
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
      <main id="menuContainer"> 
        <section id="menu">
            <div className="buttonsType">
              <button className="buttonMeal" id="btnBreakfast">Desayuno</button>
              <button className="buttonMeal" id="btnMenu"> Almuerzo/Cena</button>
            </div> 
            <section className="mealContainer">
                  <div className="productContainer">
                    {/* <h3> SANDWICHES </h3> */}
                   
                      {products.map((item) => {
                        // console.log(`Entered ${item.id}`);
                        return (
                          <div className="productCard">
                            <img className="productImg cardP" key={item.id} src={item.image}/> 
                            <div className="textCard">
                              <span className= "productName cardP">{item.name}</span><br/>
                              <span className= "productprice carP">{item.price}</span>
                            </div>
                          </div> 
                        );
                      })}
                  </div>
                </section>
      </section>
      <section id="section-ticket">
        <div>
          <h3> Aqui se renderiza el ticket </h3>
        </div>
      </section>
     </main>
    </>
  );
};

export default Home;
 