import axios from "axios";

const urlApiProducts = "http://localhost:3001/products";

export const  getProductsData = () =>{

  return new Promise((resolve, reject) => {
    axios.get(urlApiProducts)
    .then((res) =>{
      resolve(res.data);
      // console.log(res.data)
    })
    .catch((error) => {
      reject(error);
  })
})
};
