import axios from "axios";
 
const urlApiProducts = "http://localhost:8080/products?_page=1&_limit=10";
 
const accessToken = localStorage.getItem("accessToken");
 
const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

export const getProductsData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(urlApiProducts, config)
      .then((res) => {
        resolve(res.data);
        // console.log(res.data)
      })
      .catch((error) => {
        reject(error);
      });
  });
};