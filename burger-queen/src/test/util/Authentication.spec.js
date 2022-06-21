import axios from 'axios';
import {authentication, urlAxios} from '../../util/Authentication.js'

jest.mock('axios');

describe('authentication',() =>{
  // describe('should auth successful with an username and password',()=>{
    test('should show status: 200 ',() =>{
    const objStatus = {
        email: "alf@burger.com",
        password: "123456",
    }
    const emailAuth ="alf@burger.com";
    const passwordAuth = "123456";
    // const tokenTest = 200;
    
      // axios.post.mockResolvedValue(urlAxios, objStatus)
      axios.post.mockImplementationOnce(() => authentication(emailAuth,passwordAuth).resolve({token:"mesero1"}))
      // return authentication(emailAuth,passwordAuth)
      //  .then((res)=>{
      //   expect((res)).toBe(objStatus)
      //  })
        
    // })
  })
//   test('should show status: different to 200 ',() =>{
//     const objStatuss = {
//       email: "alfi@burger.com",
//       password: "12345",
//   }
//   const emailAuths ="alfi@burger.com";
//   const passwordAuths = "12345";
//   const tokenTest = 300;


//   const mockResp = {error:"No autorizado"}
//  axios.post.mockRejectedValue(urlAxios,objStatuss);
//     // axios.post.mockImplementation(urlAxios,objStatuss)
//     return authentication(emailAuths,passwordAuths)
//      .catch((res)=>{
//       console.log(res)
//       expect((res)).toBe(mockResp)
//      })
  
//   })

//   test('should show status: 400 not register ',() =>{
//     const objStatusError = {
//       email: "alfito@burger.com",
//       password: "1234567",
//   }
//   const emailAuthErr ="alfito@burger.com";
//   const passwordAuthErr = "1234567";
//   // const tokenTest = 400;
//     axios.post.mockRejectedValue()
//     return authentication(emailAuthErr,passwordAuthErr)
//      .catch((res)=>{
//       expect((res)).toBe(tokenTest)
//      })
  
//   })
})