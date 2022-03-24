import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

 export const  ProtectedRoute = ({ isAdmin, children }) => {
  const { isAuthenticat,user } = useSelector((state) => state.login);
    //  console.log("protect", user),
     console.log("test",isAdmin && user.role == "admin" || isAuthenticat )
  return( 
  
    isAuthenticat ? children : <Navigate to = "/login" />
      
   
  )
      
};
 export const  AdminProtectedRoute = ({ isAdmin, children }) => {
  const { user } = useSelector((state) => state.login);
  return( 
  
    isAdmin && user.role == "admin" ? children : <Navigate to = "/login" />
      
   
  )
      
};
