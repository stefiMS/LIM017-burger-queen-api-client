import Login from './../src/Components/Login.js';
import axios from 'axios';

jest.mock('axios');

describe('Login',() =>{
    test('should login with an authenticated username and password',() =>{



        expect(Login).toBe('function')
    })
})