import axios from "axios";
import { accessToken } from "./getProducts.js";
import { config } from "./getProducts";


const urlAxiosKitchen = "http://localhost:8081/orders"

export const sendToKitchen = (payload) => {
  return new Promise((resolve, reject) => {
    axios.post(urlAxiosKitchen, payload,  config)
    .then((response) =>{
        resolve(response.data)
    })
    .catch((error) =>{
      reject(error)
    })
})
}

