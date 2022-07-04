import React, { useEffect, useState } from "react";
import logoBurguer from "./../Assets/logoBurguer.png";
import { getOrders } from "../util/getProducts";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate("");
  const [orders, setOrders] = useState([]);
  // const [productsOrder, setProductsOrder] = useState([]);

  useEffect(() => {
    const showOrders = () => {
      getOrders()
        .then((response) => {
          setOrders(response);
        })
        .catch((error) => console.log(error));
    };
    showOrders();
  }, []);

  // console.log(orders);
  return (
    <>
     <header id="loginHeader">
        <nav id="loginNav">
          <img src={logoBurguer} id="logoBurguerNav" alt="logoBurguer" />
          <ul id="optionNav">
            <li onClick={() => navigate("/home")}>Home</li>
            <li onClick={() => navigate("/orders")}>Orders</li>
            <li>Table</li>
          </ul>
        </nav>
      </header>

      <main>
        <h1> Aqui van las ordenes </h1>
        <section id="orders">
          <div className ="orderContainer">
            {orders.map((item) => {
              return (
                <div className="cardOrder" key={item.id}>
                  <p id="orderId">Orden N°: 00{item.id} </p>
                  <p id="waiterId"> Mesero: {item.userId}</p>
                  <p id="orderClient">Cliente: {item.client}</p>
                  <p>Mesa: {item.tableNum}</p>
                  <div id="orderProducts">
                      <table>
                        <thead>
                          <tr>
                            <td>PRODUCTOS</td> 
                            <td>CANTIDAD</td>
                          </tr>
                        </thead>
                        <tbody>
                        {item.products.map((prod)=>{
                          return (
                            <tr key={prod.id}>
                              <td>{prod.name}</td> 
                              <td>{prod.qty}</td>
                            </tr>
                          )}
                        )}
                        </tbody>
                      </table>
                  </div>
                  <button className="btnState"> PENDING </button>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Orders;
