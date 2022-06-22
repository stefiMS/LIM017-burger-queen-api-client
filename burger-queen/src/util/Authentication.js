import axios from "axios";

<<<<<<< HEAD
export const authentication = (email, password) => {

  return new Promise((resolve, reject) => {
    axios.post("http://localhost:3001/auth", { email, password })
=======
  const urlAxios = "http://localhost:3001/auth";

export const authentication = (email, password) => {

  return new Promise((resolve, reject) => {
    axios.post(urlAxios, { email, password })
>>>>>>> f2823d51d29be4076118ae37b0cf06fb52786cdf
    .then((response) => {
      const  { status  }  = response;
      const  { token }  = response.data;
      if (status === 200) {
        resolve(token);
      }
<<<<<<< HEAD
      // reject(status);
=======
      reject(status);
>>>>>>> f2823d51d29be4076118ae37b0cf06fb52786cdf
    })
    .catch((error) => {
      reject(error);
    })
  });
}











