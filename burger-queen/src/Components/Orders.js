import React from "react";
import logoBurguer from "./../Assets/logoBurguer.png";

import { useNavigate } from "react-router-dom";
import { OrderStatus }  from "./orders/Status.js"
// import { getOrders } from "../util/getProducts";

const Orders = () => {
  const navigate = useNavigate("");
  // const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   const showOrders = () => {
  //     getOrders()
  //       .then((response) => {
  //         setOrders(response);
  //       })
  //       .catch((error) => console.log(error));
  //   };
  //   showOrders();
  // }, []);

  // console.log(orders);
  return (
    <>
     <header id="loginHeader">
        <nav id="loginNav">
          <img src={logoBurguer} id="logoBurguerNav" alt="logoBurguer" />
          <ul id="optionNav">
              <li onClick={() => navigate("/menu")}>MENÚ</li>
              <li onClick={() => navigate("/orders")}>PEDIDOS</li>
              <li onClick={() => navigate("/products")}>PRODUCTOS</li>
              <li onClick={() => navigate("/userManagement")}>GESTIÓN DE USUARIOS</li>
          </ul>
        </nav>
      </header>
      <main>
        <OrderStatus/>
      </main>

      {/* <main>
        <h1> Aqui van las ordenes </h1>
        <section id="orders">
          <div className ="orderContainer">
            {orders.map((item) => {
              return (
                <div className="cardOrder" key={item.id}>
                  <p id="orderId">Orden N°: 00{item.id} </p>
                  <p id="waiterId"> Mesero: {item.userId}</p>
                  <p id="orderClient">Cliente: {item.client}</p>
                  <p id="orderTime">{item.dateEntry}</p>
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
                  <p id="status">Status: {item.status}</p>
                  <button className="btnState"> PREPARANDO </button>
                </div>
              );
            })}
          </div>
        </section>
      </main> */}
    </>
  );
};

export default Orders;
