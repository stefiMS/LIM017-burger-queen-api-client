import React from 'react';


const Breakfast = () => {
  return (
            <section className="breakfastContainer">
              <div className="sandwichContainer">
                <h3> SANDWICHES </h3>
                <div className="sandwichProduct">
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
    //   <div id="card">
    //     <div id="product">
    //       <div id="product-name">
    //         <p id="price"></p>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Breakfast;