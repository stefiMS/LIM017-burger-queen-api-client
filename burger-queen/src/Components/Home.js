import React from 'react';
import { useNavigate } from 'react-router';
import logoBurguer from "./../Assets/logoBurguer.png";
import menu from "./../Assets/iconsHome/menu.png";
import orders from "./../Assets/iconsHome/orders.png";
import userManagement from "./../Assets/iconsHome/userManagement.png";
import productos from "./../Assets/iconsHome/productos.png"; 

export const Home = () =>{

    const navigate = useNavigate('');

    return (
        <section>
            <header><img src={logoBurguer} id="logoBurguer" alt="logoBurguer"/></header>
            <main className='containerIconHome'>
                <img 
                  src={userManagement}
                  id="imgUserManagement"
                  alt="Gestión de Usuarios"
                  className="imgHome" 
                  onClick={() => navigate('/userManagement')}
                />
                <img
                 src={menu}
                 id="imgMenu"
                 alt="Menú"
                 className="imgHome"
                 onClick={() => navigate('/menu')}
                />
                <img
                 src={orders}
                 id="imgOrders"
                 alt="Pedidos"
                 className="imgHome"
                 onClick={() => navigate('/orders')}
                />
                <img
                 src={productos}
                 id="imgCreateProducts"
                 alt="productos"
                 className="imgHome"
                 onClick={() => navigate('/products')}
                />

            </main>

        </section>


    )

}