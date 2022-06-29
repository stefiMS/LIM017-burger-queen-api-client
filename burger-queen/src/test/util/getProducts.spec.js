import axios from 'axios';
import {getProductsData} from './../../util/getProducts.js'

jest.mock('axios');

const urlApiProducts = "http://localhost:8081/products";
describe('getProducts',() =>{
    test('should get products from API ',() =>{
     
     const objProduct = 
     {
        config: {
          headers: {
            Authorization:"Bearer eyJhbGciOiJIUzI1",
          }
        },
        data: 
          [{
           id: 1,
           image: "https://i.imgur.com/kqnYsST.jpg",
           name: "Sandwich de jamon y queso",
           price: 10,
           type: "Breakfast"},

           {
            id: 2,
            image: "https://i.imgur.com/PrPhPnm.jpg",
            name: "Cafe Americano",
            price: 5,
            type: "Breakfast"}] 
       };

      const data = [
           {
            id: 1,
            image: "https://i.imgur.com/kqnYsST.jpg",
            name: "Sandwich de jamon y queso",
            price: 10,
            type: "Breakfast"},

            {
              id: 2,
             image: "https://i.imgur.com/PrPhPnm.jpg",
             name: "Cafe Americano",
             price: 5,
             type: "Breakfast"}] 
        
      axios.get.mockResolvedValue(objProduct)
      return getProductsData()
       .then((res)=>{
        expect((res)).toBe(objProduct)
       })

    })
    test('should not  get products from API ',() =>{
      const errProduct =
      axios.get.mockRejectedValue(null)
      return getProductsData()
       .catch((err)=>{
        expect((err)).toBe(null)
       })

    })
})