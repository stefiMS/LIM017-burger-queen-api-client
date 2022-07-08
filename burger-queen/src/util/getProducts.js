import axios from "axios";

const urlApiProducts = "http://localhost:8081/products";
const urlApiOrders = "http://localhost:8081/orders";

// const urlApiProducts = "http://localhost:8080/products";
// const urlApiOrders = "http://localhost:8080/orders";


export const accessToken = localStorage.getItem("accessToken");
// console.log(accessToken)

export const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

// console.log(config)

export const getProductsData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(urlApiProducts, config)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const getOrders = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(urlApiOrders, config)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// Creación de productos 

export const createNewProduct = (payload) => {
  return new Promise((resolve, reject) =>{
    axios.post(urlApiProducts, payload, config)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => reject(error))
  })
}