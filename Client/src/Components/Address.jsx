import { useState , useContext } from "react"
import { FormContext } from "./Context"
const AddressDetails = ()=>{
  const {Changed , FormData} = useContext(FormContext);

  const handleChange =(e)=>{
      const {name,value} = e.target;
     Changed(name,value)
  }


    return (
        <>
         <div className=" flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-md w-96">
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                  City Name
                </label>
                <input
                onChange={handleChange}
                value={FormData.CityName}
                  type="text"
                  name="CityName"
                  className="mt-1 p-2 w-full border outline-none rounded-md"
                  placeholder="Enter City Name"
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                 Local address
                </label>
                <input
                              onChange={handleChange}
                              value={FormData.localAddress}
                  type="text"
                  name="localAddress"
                  className="mt-1 p-2 w-full outline-none border rounded-md"
                  placeholder="Enter local adddress"
                />
              </div>
    
    
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                  House Address
                </label>
                <input
                 onChange={handleChange}
                 value={FormData.houseAddress}
                  type="text"
                  name="houseAddress"
                  className="mt-1 p-2 w-full border outline-none rounded-md "
                  placeholder="Enter House Address"
                />
              </div>
          </div>
        </div>
        </>
    )
    
    }
    
    export default AddressDetails