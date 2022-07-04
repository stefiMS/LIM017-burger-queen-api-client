import axios from "axios";

const urlApiProducts = "http://localhost:8080/products";
const urlApiOrders = "http://localhost:8080/orders";

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
        // console.log(res)
        resolve(res.data);
        // console.log(res.data)
      })
      .catch((error) => {
        // console.log(error)
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