import axios from "axios";
import { createNewUsers, getUsers, updateUser, deleteUser } from "../../util/FunctionUsers"; 

jest.mock('axios');

const objUser = 
        {
           config: {
             headers: {
               Authorization:"Bearer eyJhbGciOiJIUzI1",
             }
           },
           data: 
             [{
                email: "alf@burger.com",
                id: 7,
                password: "$2a$10$YzpON3GAaupH2IpwV4RnvOD3EMrY9nEtwm4j9JvpUbBaXnbB.MHeK",
                roles: {admin: true}
            }] 
          };
        
         const dataUser =  [{
            email: "alf@burger.com",
            id: 7,
            password: "$2a$10$YzpON3GAaupH2IpwV4RnvOD3EMrY9nEtwm4j9JvpUbBaXnbB.MHeK",
            roles: {admin: true}
        }]


//Función crear nuevos usuarios

describe('createNewUsers',() =>{
    test('should create New users',() =>{
    
      axios.post.mockResolvedValue(objUser)
      return createNewUsers()
       .then((res)=>{
        expect((res)).toStrictEqual(dataUser)
       })

    })
})

//Función obtener usuarios
describe('getUsers',() =>{
    test('should get created users',() =>{
    
      axios.get.mockResolvedValue(objUser)
      return getUsers()
       .then((res)=>{
        expect((res)).toStrictEqual(dataUser)
       })

    })
})



// {email: 'alf@burger.com', password: '$2a$10$Phxikxet8ZCx429HJYr46.rYKvboStgsNcjNhNn.vsscPr122UWnK', roles: {…}, id: 7}

// {data: {…}, status: 200, statusText: 'OK', headers: {…}, config: {…}, …}

// {accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…jcifQ.gC2LYr9GbT8lTGT0DRG82U4mNqcQD8_A-Zs4YzoNkTQ', user: {…}}