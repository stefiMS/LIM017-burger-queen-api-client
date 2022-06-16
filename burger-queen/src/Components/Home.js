import React from 'react';
import logoBurguer from './../Assets/logoBurguer.png'

const home = () => {
    return (
        <>
            <header id='loginHeader'>
                <nav id='loginNav'>
                    <img src={logoBurguer} id='logoBurguerNav' alt='logoBurguer' />
                    <ul id='optionNav'>
                        <li>Home</li>
                        <li>Orders</li>
                        <li>Table</li>
                    </ul>
                </nav>
            </header>
            <section>
                <h1> estás en el home </h1>
            </section>
        </>
        
    )
}

export default home;