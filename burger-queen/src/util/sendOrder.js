import axios from "axios";
import { accessToken } from "./getProducts.js";
import { config } from "./getProducts";


// const urlAxiosKitchen = "http://localhost:8081/orders"
const urlAxiosKitchen = "http://localhost:8080/orders"
const urlAxiosUpdateStatus = (orderId) => `http://localhost:8080/orders/${orderId}`

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

export const updateOrderStatus = (payload) => {
  return new Promise((resolve, reject) => {
    axios.patch(urlAxiosUpdateStatus(payload.id), payload,  config)
    .then((response) =>{
        resolve(response.data)
    })
    .catch((error) =>{
      reject(error)
    })
})
}