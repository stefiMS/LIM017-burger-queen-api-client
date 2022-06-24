import axios from 'axios';
import {getProductsData} from './../../util/getProducts.js'

jest.mock('axios');

describe('getProducts',() =>{
    test('should get products from API ',() =>{
      const data = [
           {id: 1,
            image: "https://i.imgur.com/kqnYsST.jpg",
            name: "Sandwich de jamon y queso",
            price: 10,
            type: "Breakfast"},
            {id: 2,
             image: "https://i.imgur.com/PrPhPnm.jpg",
             name: "Cafe Americano",
             price: 5,
             type: "Breakfast"}]
        
      axios.get.mockResolvedValue()
      return getProductsData()
       .then((res)=>{
        expect((res)).toBe(data)
       })
        
    // })
    })
})