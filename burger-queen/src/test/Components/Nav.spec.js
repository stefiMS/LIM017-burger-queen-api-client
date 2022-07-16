import React from "react";
import logoBurguer from "../../Assets/logoBurguer.png";
import { useNavigate } from "react-router";
import '@testing-library/jest-dom'
import { fireEvent, render, userEvent, screen} from "@testing-library/react";


// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useNavigate: () => (jest.fn())
// }));


describe('Nav Bar', () => {
  it('It does something', () => {
    render()
    const menu = screen.getByText("PEDIDOS");
    const products = screen.getByText("PRODUCTOS");

    fireEvent.click(menu);

    expect(history.location.pathname).toBe();

    // fireEvent.click(next);

    // expect(history.location.pathname).toBe(Urls.Start);

    // fireEvent.click(back);


    
  })   
});
