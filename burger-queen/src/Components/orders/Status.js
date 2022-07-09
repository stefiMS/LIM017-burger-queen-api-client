import React, { useEffect, useState } from "react";
import { getOrders } from "../../util/FunctionProducts";
import { updateOrderStatus } from "../../util/FunctionOrder";
import { MyStopwatch } from "../../util/Countdown";


export const OrderStatus = () => {
  const [orders, setOrders] = useState([]);

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



  // display button per status

  const displayNextStatusButton = (currentStatus, orderId) => {
    switch (currentStatus) {
      case "pending":
        return (
          <button onClick={() => setOrderStatus("delivering", orderId)}>
            Preparado
          </button>
        );
      case "delivering":
        return (
          <button onClick={() => setOrderStatus("delivered", orderId)}>
            Listo
          </button>
        );
      case "delivered":
        return ( <h4> Entregado </h4>);
    }
  };

  const setOrderStatus = (newStatus, orderId) => {
    const patchRequest = {
      id: orderId,
      status: newStatus,
      dateProcessed: new Date()
    };
    updateOrderStatus(patchRequest)
    .then((resolve) =>  window.location.reload(false));
  };

  if (orders.length === 0) {
    return null;
  };

  // Status Theme 

  const statusTheme = (item) => {
    switch (item.status) {
      case "pending":
        return "card text-bg-light mb-3 cardOrder";
      case "delivering":
        return "card text-bg-warning mb-3 cardOrder";
      case "delivered":
        return  "card text-bg-success mb-3 cardOrder";
    }
  };

  return (
    <>
      <main>
        <h2> Pedidos </h2>

        <div className="btnOrderFilter">
          <button className="buttonTypeOrder btn btn-warning">Todo</button>
          <button className="buttonTypeOrder btn btn-warning"> Pending </button>
          <button className="buttonTypeOrder btn btn-warning"> Listos </button>
          <button className="buttonTypeOrder btn btn-warning"> Entregados </button>
        </div>



        <section id="orderCards">
          <div className="orderContainer">
            {orders.map((item) => {
              return (

                <div className= {statusTheme(item)} key={item.id}>

                  <p id="orderId ">Orden N°: 00{item.id} </p>
                  <p id="waiterId"> Mesero: {item.userId} </p>
                  <p id="orderClient"> Cliente: {item.client} </p>
                  <p> Mesa: {item.tableNum} </p>
                  <div id="orderProducts">
                    <table>
                      <thead>
                        <tr key={item.id}>
                          <td className="tittleCard">PRODUCTOS</td>
                          <td className="tittleCard">CANTIDAD</td>
                        </tr>
                      </thead>
                      <tbody>
                        {item.products.map((product) => {
                          return (
                            <tr key={product.id}>
                              <td>{product.name}</td>
                              <td>{product.qty}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  {/* <p id="status">Status Actual: {item.status}</p> */}
                  {displayNextStatusButton(item.status, item.id)}
                  <div>
                    {item.status === 'delivered' ? <MyStopwatch startTime = {item.dateEntry} endTime ={item.dateProcessed} /> : null}
                  </div>
                </div>
                
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};
