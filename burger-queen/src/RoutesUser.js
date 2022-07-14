import Menu from "./Components/Menu.js";
import Orders from "./Components/Orders.js";
import { ErrorNoAccess } from "./Components/ErrorNoAccess.js";
import { UserManagement } from "./Components/Admin/UserManagement";
import { Products } from "./Components/Products";
import { Home } from "./Components/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";

export const  RoutesUser = () => {

    // sessionStorage.setItem("userRole",  responseUserData.roles.admin);
    // sessionStorage.setItem("userId", responseUserData.id)
    const accessUser = JSON.parse(sessionStorage.getItem('user'));

    

    return (
    <>
     <Routes>
        
            if(user.roles.admin === true){
            ( <>
                    <Route path='/home' element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/userManagement" element={<UserManagement />} />
              {/* </Route> */}
              </>
            )}
            else {(<Route path="*" element={<ErrorNoAccess />}  />)}

        
        
            if(user.roles.admin === false){
            ( <>
                    <Route path='/home' element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/orders" element={<Orders />} />
                    {/* <Route path="/products" element={<Products />} />
                    <Route path="/userManagement" element={<UserManagement />} /> */}
              {/* </Route> */}
              </>
            )}
            else{ (<Route path="*" element={<ErrorNoAccess />}  />)

              }

        {/* <Route path='*' element={<ErrorNoAccess/>} />  */}
        {/* // <Route path="/home" element={<Home />} />
        // <Route path="/menu" element={<Menu />} />
        // <Route path="/orders" element={<Orders />} />
        // <Route path="/products" element={<Products />} />
        // <Route path="/noAccess" element={<ErrorNoAccess />} />
        // <Route path="/userManagement" element={<UserManagement />} /> */}

    </Routes>
    </>
    )
}