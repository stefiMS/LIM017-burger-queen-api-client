import axios from "axios";
import { accessToken } from "./getProducts.js";
import { config } from "./getProducts";


const urlAxiosKitchen = "http://localhost:8080/orders"

export const sendToKitchen = (userId, client, products, table) => {
  return new Promise((resolve, reject) => {
    axios.post(urlAxiosKitchen, config)
    .then((response) =>{
      // const userRole = localStorage.getItem("userRole");
      // if(userRole === admin ){
        console.log(response)
        resolve(response.data)
    })
    .catch((error) =>{
      reject(error)
    })
})
}

