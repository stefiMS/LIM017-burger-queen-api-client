import React from 'react';
import logoBurguer from './../Assets/logoBurguer.png'

const Home = () => {
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
      <section id="menu-buttons">
        <div>
          <button> Desayuno </button>
          <button> Alm/Cena</button>
        </div>
      </section>
      <section id="menu">
        <div>
          <h3> Aqui van los items del desayuno o almuerzo</h3>
          <div>
            <p>Aqui se va a renderizar </p>
          </div>
        </div>
      </section>
      <section id= 'section-ticket'>
        <div>
            <h3> Aqui se renderiza el ticket </h3>
        </div>
      </section>
    </>
  );
};

export default Home;