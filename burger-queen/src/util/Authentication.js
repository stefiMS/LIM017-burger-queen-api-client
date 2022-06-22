import axios from "axios";

export const authentication = (email, password) => {

  return new Promise((resolve, reject) => {
    axios.post("http://localhost:3001/auth", { email, password })
    .then((response) => {
      const  { status  }  = response;
      const  { token }  = response.data;
      if (status === 200) {
        resolve(token);
      }
      // reject(status);
    })
    .catch((error) => {
      reject(error);
    })
  });
}











