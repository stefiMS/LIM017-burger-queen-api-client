import { getProductsData } from "../../util/getProducts.js";
import React, { useEffect, useState } from "react";

export const ProductItem = () => {

  const [filteredData, setFilteredData] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsSelected, setProductsSelected ] = useState([]);

  const addToCart = (id) => {
    // console.log(filteredData);
    const filteredProduct = filteredData.filter((item) => item.id === id)
     filteredProduct[0].counter = 1
     console.log(filteredProduct);
    setProductsSelected([...productsSelected, ...filteredProduct])

  };



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
const [counter, setCounter] = useState(1);
// const plusCounter = () => setCounter(counter +1);
// const lessCounter = () => {
//   if(counter >= 1){
//     setCounter(counter -1);
//   }else{
//     counter === 0;
//   }
// }

const handlePlusCounter = (index) => {
  const newTicketProducts = [...productsSelected];
  newTicketProducts[index].counter++;
  setProductsSelected(newTicketProducts)
}

const handleMinusCounter = (index) => {
  const newTicketProducts = [...productsSelected];
  if(newTicketProducts[index].counter >= 1){
  newTicketProducts[index].counter--;
  } else{
    newTicketProducts[index].counter = 0
  }
  setProductsSelected(newTicketProducts)
}



  return (
    <>
    {/* filtro por tipo de item (desayuno/cena) */}
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
                <div className="productContainer" >
                    {filteredData.map((item) => {
                      return (
                        <div className="productCard" key={item.id}>
                          <img className="productImg cardP" src={item.image}/>
                          <div className="textCard">
                            <span className= "productName cardP">{item.name}</span><br/>
                            <span className= "productprice carP">{item.price}</span>
                            <button onClick={() => addToCart(item.id)}>Agregar</button>
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
              {/* Nombre de item */}
              <section className='orderProductContainer'>
                {productsSelected.map((item, index) => {
                  return(
                  <div className='orderProduct' key={index} >
                    <div className='order column1'>
                        <img />
                        <p>{item.name}</p>
                    </div>
                    {/* Cantidad de Item */}

                    <div className='order column2'>
                        <button className='quantity'  onClick={() => handleMinusCounter(index)}>-</button>
                        <span className='quantity'>{item.counter}</span>
                        <button className='quantity' onClick={() => handlePlusCounter(index)}>+</button>
                    </div>

                    {/* Precio  */}
                    <div className='order column3'>
                        <span>{item.price*item.counter}</span>
                        <span><i className="fa-solid fa-trash-can"></i></span>
                    </div>
                  </div>
                )}
                )}
              </section>
            </section>
          </section>
      </section>
    </>
    )}