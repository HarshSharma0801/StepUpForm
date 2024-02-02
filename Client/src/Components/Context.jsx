import React from "react";
import { useState } from "react";
export const FormContext = React.createContext({
    FormData:{
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        bankName:'',
        bankAddress:'',
        ifscCode:'',
        accountNumber:'',
        profession:'',
        companyName:'',
        mode:'',
        CityName:'',
        localAddress:'',
        houseAddress:''

    },
    Changed: (data) => {},

})

export const FormContextProvider = ({ children }) => {
    const [FormData, setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        bankName:'',
        bankAddress:'',
        ifscCode:'',
        accountNumber:'',
        profession:'',
        companyName:'',
        mode:'',
        CityName:'',
        localAddress:'',
        houseAddress:''
    });
    
 const Changed = (name , value)=>{

    setFormData({...FormData , [name]:value});
 }
  
    return (
      <FormContext.Provider
        value={{
            Changed,
            FormData
        }}
      >
        {children}
      </FormContext.Provider>
    );
  };