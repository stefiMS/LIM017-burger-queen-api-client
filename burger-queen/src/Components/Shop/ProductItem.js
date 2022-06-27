



// const ProductItem = ({ data, addToCart }) => {
//     let { id, name, price } = data;
//     return (
//       <div style={{ border: "thin solid gray", padding: "1rem" }}>
//         <h4>{name}</h4>
//         <h5>${price}.00</h5>
//         <button onClick={() => addToCart(id)}>Agregar</button>
//       </div>
//     );
//   };
  
//   export default ProductItem;


// export const ProductItem = ({ addToCart }) => {
//     return (

//           <section className="mealContainer">
//                 <div className="productContainer">
//                     {filteredData.map((item) => {
//                       return (
//                         <div className="productCard">
//                           <img className="productImg cardP" key={item.id} src={item.image}/>
//                           <div className="textCard">
//                             <span className= "productName cardP">{item.name}</span><br/>
//                             <span className= "productprice carP">{item.price}</span>
//                             <button onClick={() => addToCart(id)}>Agregar</button>
//                           </div>
//                         </div>
//                       );
//                     })}
//                 </div>
//           </section>

//     )}


import { getProductsData } from "../../util/getProducts.js";
import React, { useEffect, useState, useReducer } from "react";
// import { TYPES } from "../../Actions/shoppingActions";
import { shoppingReducer, shoppingInitialState, TYPES } from "../../reducer/shoppingReducer.js";
// import { ShoppingCart } from "./ShoppingCart";

export const ProductItem = () => {
  
  const [filteredData, setFilteredData] = useState([]);
  const [menu, setMenu] = useState([]);
  const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const { products, cart } = state;

  const addToCart = (id) => {
    //console.log(id);
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };



  useEffect(() => {
    const getBreakfastProducts = () => {
      getProductsData()
        .then((response) => {
          setFilteredData(response);
          setMenu(response);
        })
        .catch((error) => console.log(error));
    };

    getBreakfastProducts();
  }, []);
  
//función contador
const [counter, setCounter] = useState(0);
const plusCounter = () => setCounter(counter +1);
const lessCounter = () => setCounter(counter -1)




  
  return (
    <>
      <section id="menu">
          <div className="buttonsType">
            <button className="buttonMeal" id="btnBreakfast" 
            onClick = {(e) => {
              let breakfastProducts = menu.filter(product => product.type === "Breakfast")
              setFilteredData(breakfastProducts)} //boton de reset setFilteredData(products)
            }
            >Desayuno</button>
            <button className="buttonMeal" id="btnMenu"
            onClick = {(e) => {
              let dinnerProducts = menu.filter(product => product.type === "Dinner")
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
                            <button onClick={(el) => addToCart(el.id)} >Agregar</button>
                          </div>
                        </div>
                      );
                    })}
                </div>
          </section>
      </section>
      {/* <ShoppingCart/> */}
      {/* {cart.map((item, index) => ( */}
          
        {/* ))} */}

      
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
                {cart.map((item, index) => {
                  return(
                  <div className='orderProduct'>
                    <div className='order column1'>
                        <img />
                        <p>{item.name}</p>
                    </div>
                    <div className='order column2'>
                        <button className='quantity' onClick={lessCounter}>-</button>
                        <span className='quantity'>{counter}</span> 
                        <button className='quantity' onClick={plusCounter}>+</button>
                    </div>
                    <div className='order column3'>
                        <span>{item.price*counter}</span>
                        <span><i className="fa-solid fa-trash-can"></i></span>
                    </div>
                  </div>
                
                )
                }
                )}
              </section>
            </section>
          </section>
      </section>
          
    </>

      
    )}