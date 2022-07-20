import React from "react";
import { NavBar } from "../../Components/NavBar";
import logoBurguer from "../../Assets/logoBurguer.png";
//import { useNavigate } from "react-router";
import '@testing-library/jest-dom'
import { fireEvent, render, userEvent, screen} from "@testing-library/react";


const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  //...jest.requireActual('react-router-dom'),
  useNavigate: {}//() => mockNavigate
}));



describe('Nav Bar', () => {
  it('It does something', () => {
    const home = render(<NavBar/>)
    // const handleHome = jest.fn()
    // const menu = screen.getByText("PEDIDOS");
    // const products = screen.getByText("PRODUCTOS");
     
    // fireEvent.click(home);

    // expect(history.location.pathname).toBe();

    // fireEvent.click(next);

    // expect(history.location.pathname).toBe(Urls.Start);

    // fireEvent.click(back);

    // expect( screen.getByTestId('burgerHome'))
    expect (handleHome.mock.calls).toHaveLength(1)
  })   
});
