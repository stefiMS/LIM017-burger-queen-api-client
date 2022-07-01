import React, { useEffect, useState } from "react";
import logoBurguer from "./../Assets/logoBurguer.png";
import { getOrders } from "../util/getProducts";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate("");
  const [orders, setOrders] = useState([]);
  const [productsOrder, setProductsOrder] = useState([]);

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
          <div id="orderContainer">
            {orders.map((item, index) => {
              return (
                <div key={item.id}>
                  <p id="orderId">Orden N°: {item.id} </p>
                  <p id="waiterId"> Mesero: {item.userId}</p>
                  <p id="orderClient">Cliente: {item.client}</p>

                  <div id="orderProducts">
                    {/* {productsOrder.map((el, position)=>{
                      return (
                        <p>{item[index].el[position].qty}</p>
                      )
                    })} */}
                    

                  </div>
                  {/* <p id="orderProducts"> {item.products} </p>
                  <p id="orderProductsName"> {item.products.name} </p> */}
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
