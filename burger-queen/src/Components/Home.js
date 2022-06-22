import React, { useState, useEffect } from "react";
import logoBurguer from "./../Assets/logoBurguer.png";
import { getProductsData } from "../util/getProducts";
 
const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
 
  useEffect(() => {
    const getBreakfastProducts = () => {
      getProductsData()
        .then((response) => {
          setFilteredData(response);
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
            <button className="buttonMeal" id="btnBreakfast" 
            onClick = {(e) => {
              let breakfastProducts = products.filter(product => product.type === "Breakfast")
              setFilteredData(breakfastProducts)} //boton de reset setFilteredData(products)
            }
            >Desayuno</button>
            <button className="buttonMeal" id="btnMenu"
            onClick = {(e) => {
              let dinnerProducts = products.filter(product => product.type === "Dinner")
              setFilteredData(dinnerProducts)}
            }
            > Almuerzo/Cena</button>
          </div> 
          <section className="mealContainer">
                <div className="productContainer">
                    {filteredData.map((item) => {
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
