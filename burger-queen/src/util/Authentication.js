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