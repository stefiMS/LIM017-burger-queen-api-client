import Login from '../../Components/Login.js';
import { useState } from "react";
import React from "react";
// import { Authentication } from "../../util/Authentication";
import { createMemoryHistory } from 'history';

import { Router, useNavigate } from "react-router-dom";
import { render } from '@testing-library/react';
import {fireEvent, screen, waitFor} from "@testing-library/react";


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(() => { })
}));

jest.mock('../../util/Authentication'), () =>({ 
    
    authentication: jest.fn(() => Promise.resolve())
})

describe('login',  () => {
    it('should login with an authenticated username and password', async () => {

        const history = createMemoryHistory();
        render(
            <Router location={history.location} navigator={history}>
                <Login />
            </Router>
        )
        beforeAll(() => server.listen())
        const emailInput = screen.getByPlaceholderText('Ingrese su usuario');
        const passwordInput = screen.getByPlaceholderText('Ingrese contraseña');
        const buttonLogin = screen.getByText('INICIAR SESIÓN');

        fireEvent.change(emailInput, { target: { value: 'anita.borg@systers.xyz' } });
        fireEvent.change(passwordInput, { target: { value: '123456' } });
        fireEvent.click(buttonLogin);

        await waitFor(() => {
            expect(window.location.hash).toBe('/home')
        })

        
    })



})
