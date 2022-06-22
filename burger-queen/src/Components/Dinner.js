import React from 'react';


const Dinner = () => {
  return (
            <section className="lunchContainer">
              <div className="burgerContainer">
                <h3> HAMBURGUESAS </h3>
                <div className="burgerProduct">
                  <div className="productCard">
                    <p>imagen renderizada aqui</p>
                    <p>Aqui se va nombre renderizado </p>
                    <p>costo</p>
                  </div>  
                </div>
              </div>
              <div className="complementsContainer">
                <h3> ACOMPAÑAMIENTOS </h3>
                <div className="complementsContent">
                  <div className="productCard">
                    <p>imagen renderizada aqui</p>
                    <p>Aqui se va nombre renderizado </p>
                    <p>costo</p>
                  </div>
                </div>
              </div>
              <div className="beveragesContainer">
                <h3> BEBIDAS </h3>
                <div className="beveragesContent">
                  <div className="productCard">
                    <p>imagen renderizada aqui</p>
                    <p>Aqui se va nombre renderizado </p>
                    <p>costo</p>
                  </div>
                </div>
              </div>
              
            </section>






    // <section>
    //   <div id= 'card'>
    //     <div id= 'product'>
    //       <div id='product-name'>
    //         <p id='price'></p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Dinner;