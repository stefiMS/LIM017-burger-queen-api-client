import axios from "axios";
import { config } from "./getProducts";

const urlAxiosUsers= 'http://localhost:8081/users'

export const createNewUsers = (payload) =>{
  return new Promise ((resolve, reject) => {
    axios.post(urlAxiosUsers, payload,  config)
    .then((response) =>{
      resolve(response.data)
      })
      .catch((error) =>{
        reject(error)
      })
  })
}


export const getUsers = () =>{
    return new Promise ((resolve, reject) =>{
        axios.get(urlAxiosUsers, config)
        .then((res)=>{
            resolve(res.data)
        })
        .catch((error)=>{
            reject(error)
        })
    })
}