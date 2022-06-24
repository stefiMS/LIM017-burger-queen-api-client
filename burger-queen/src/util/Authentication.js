import axios from "axios";
  const urlAxios = "http://localhost:8080/login";
  
  export const authentication = (email, password) => {
    return new Promise((resolve, reject) => {
      axios
        .post(urlAxios, { email, password })
        .then((response) => {
          const { status, data } = response;
          if (status === 200) {
            resolve(data);
        }
        reject(status);
      })
      .catch((error) => {
        reject(error);
      }); 
  });
};



//   export const authentication = (email, password) => {

//   return new Promise((resolve, reject) => {
//     axios.post(urlAxios, { email, password })
//     .then((response) => {   
//       const  { status  }  = response;  
//       if (status === 200) {
//         const  { token }  = response.data;
//         resolve(token);
//       }else{
//         reject(response.data);
       
//       }
//     })
//     .catch((error) => {
//       console.log(error)
//       reject(error);
//       // console.log(error)
//     })
//   });
// }











