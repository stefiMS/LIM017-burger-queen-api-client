import axios from 'axios';
import {authentication} from '../../util/Authentication.js'

jest.mock('axios');

describe('authentication',() =>{
    test('should auth successful when  the status: 200 ',() =>{
      const objStatus = {
          status:200, 
          data: {accessToken:"mesero1"}  
      } 
      const emailAuth ="anita.borg@systers.xyz";
      const passwordAuth = "123456"; 
      axios.post.mockResolvedValue(objStatus)
      return authentication(emailAuth,passwordAuth)
       .then((res)=>{
        expect((res)).toBe("mesero1")
       })
        
    // })
    })
    test('should show not successful when the status: 400', () =>{
      const emailAuthErr ="alfito@burger.com";
      const passwordAuthErr = "1234567";
      const objStatus = {
        status:400, 
        data: {error: 'No autorizado'}
    } 
      const respErro = {error: 'No autorizado'}
      axios.post.mockResolvedValue(objStatus)
      return authentication(emailAuthErr,passwordAuthErr)
       .catch((err)=>{
        expect((err)).toStrictEqual(respErro)
       }) 
    

    })

  test('should show Error',() =>{
 
  const urlError=  "http://localhost:3001/auth1";
  const emailAuthErr ="alfito@burger.com";
  const passwordAuthErr = "1234567";
  // const respErro = {error: 'No autorizado'}
  // const tokenTest = 400;
    axios.post.mockRejectedValue(null)
    return authentication(emailAuthErr,passwordAuthErr)
     .catch((err)=>{
      expect((err)).toBe(null)
     }) 
  
  })
})