
import logoBurguer from './../Assets/logoBurguer.png'
// import Breakfast from './Breakfast';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Routes } from 'react-router';
import React, { useState, useEffect } from "react";
import { getProductsData } from "../util/getProducts";

const Home = () => {
  const [products, setProducts] = useState([]);
  // const navigate = useNavigate("");
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

//función contador
  const [counter, setCounter] = useState(0);
  const plusCounter = () => setCounter(counter +1);
  const lessCounter = () => setCounter(counter -1)

//función llamada a producto


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
                            {/* <div>
                              <button className='quantity' onClick={lessCounter}>-</button>
                              <span className='quantity'>{counter}</span> 
                              <button className='quantity' onClick={plusCounter}>+</button>
                            </div> */}
                          </div>
                        </div>
                      );
                    })}
                </div>
          </section>
      </section>
      <section id="section-ticket">
        <h3> PEDIDOS </h3>
        <section>
          <div className="customerInformation">
            <fieldset>
              <legend>Información de Pedido</legend>
              Nombre de Cliente: <input/><br/>
              Número de mesa: <input/><br/>
              Nombre de mesero: <input/>
            </fieldset>
          </div>
          <section className="orderContainer">
            <div className="ordersTitle">
              <span id="itemTitle" className='column1'>Items</span>
              <span id="itemTitle" className='column2'>Cantidad</span>
              <span id="itemTitle" className='column3'>Precio</span>
            </div>
            <section className='orderProductContainer'>
              {/* <ol>
                <li> */}
                <div className='orderProduct'>
                  <div className='order column1'>
                      {/* <img src={}/> */}
                      <p>{}</p>
                  </div>
                  <div className='order column2'>
                      <button className='quantity' onClick={lessCounter}>-</button>
                      <span className='quantity'>{counter}</span> 
                      <button className='quantity' onClick={plusCounter}>+</button>
                  </div>
                  <div className='order column3'>
                      <span></span>
                      <span><i class="fa-solid fa-trash-can"></i></span>
                  </div>
                </div>
                {/* </li>
              </ol>   */}
            </section>
          </section>
        </section>
      </section>
    </main>

  </>
);
};

export default Home;
