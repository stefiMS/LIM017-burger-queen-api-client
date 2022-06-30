import axios from "axios";
 
const urlApiProducts = "http://localhost:8080/products";
 
export const accessToken = localStorage.getItem("accessToken");
// console.log(accessToken)

export const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  }
};

// console.log(config)

export const getProductsData = () => {
  return new Promise((resolve, reject) => {
    axios.get(urlApiProducts, config)
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

// getProductsData().then((res)=>console.log(res)).catch((err)=>console.log(err))

// import axios from "axios";

// const urlApiProducts = "http://localhost:3001/products";

// export const  getProductsData = () =>{
//   return new Promise((resolve, reject) => {
//     axios.get(urlApiProducts)
//     .then((res) =>{
//       resolve(res.data);
//       // console.log(res.data)
//     })
//     .catch((error) => {
//       reject(error);
//   })
// })
// };

