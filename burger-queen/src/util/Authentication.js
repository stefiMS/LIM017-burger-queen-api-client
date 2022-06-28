import axios from "axios";

const urlAxios = "http://localhost:8080/login";

export const authentication = (email, password) => {

  return new Promise((resolve, reject) => {
    axios.post(urlAxios, { email, password })
    .then((response) => {
      const  { status  }  = response;
      if (status === 200) {
        const  {accessToken }  = response.data;
        resolve(accessToken);
      }else{
        reject(response.data);
      }
    })
    .catch((error) => {
      console.log(error)
      reject(error);
      console.log(error)
    })
  });
}

