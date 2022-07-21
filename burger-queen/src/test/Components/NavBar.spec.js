import React from "react";
import { NavBar } from "../../Components/NavBar";
import logoBurguer from "../../Assets/logoBurguer.png";
import { createMemoryHistory } from 'history';
import { Router, MemoryRouter } from 'react-router-dom';
// import { useNavigate } from "react-router";
import '@testing-library/jest-dom'
import { fireEvent, render, userEvent, screen } from "@testing-library/react";



// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: jest.fn(() => { })
// }));



describe('Nav Bar', () => {
  it('It does something', () => {

    const history = createMemoryHistory({ initialEntries: ['/home'] });

    render(<Router location={history.location} navigator={history}></Router>)
    
    
    // render(
    //   <MemoryRouter history={history}>
    //     <NavBar />
    //   </MemoryRouter>)



    // const handleHome = jest.fn()
    // const menu = screen.getByText("PEDIDOS");
    // const products = screen.getByText("PRODUCTOS");

    // fireEvent.click(home);

    // expect(history.location.pathname).toBe();

    // fireEvent.click(next);
    // const navb = render(<img  />)
    // expect(history.location.pathname).toBe(Urls.Start);

    // fireEvent.click(navb);

    // expect(screen.getByTestId('burgerHome')).toBe()
    // // expect (handleHome.mock.calls).toHaveLength(1)
  })
});
