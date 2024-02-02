import { useContext } from "react";
import { FormContext } from "./Context";
const BankingDetails = ()=>{
  const {Changed , FormData} = useContext(FormContext);

  const handleChange =(e)=>{
      const {name,value} = e.target;
     Changed(name,value)
  }

    return (
        <>
         <div className=" flex items-center justify-center ">
          <div className="bg-white p-8 rounded shadow-md w-96">
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                  Bank Name
                </label>
                <input
                onChange={handleChange}
                value={FormData.bankName}
                  type="text"
                  name="bankName"
                  className="mt-1 p-2 w-full outline-none border rounded-md"
                  placeholder="Enter Bank Name"
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
                  Bank Address
                </label>
                <input
                          onChange={handleChange}
                          value={FormData.bankAddress}
                  type="text"
                  name="bankAddress"
                  className="mt-1 p-2 w-full border outline-none rounded-md"
                  placeholder="Enter Bank Address"
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  IFSC Code
                </label>
                <input
                       onChange={handleChange}
                       value={FormData.ifscCode}
                  type="text"
                  name="ifscCode"
                  className="mt-1 p-2 w-full border outline-none rounded-md"
                  placeholder="Enter IFSC Code"
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                  Account Number
                </label>
                <input
                   onChange={handleChange}
                   value={FormData.accountNumber}
                  type="number"
                  name="accountNumber"
                  className="mt-1 p-2 w-full border  outline-none rounded-md"
                  placeholder="Enter Account Number"
                />
              </div>
          </div>
        </div>
        </>
    )
    
    }
    
    export default BankingDetails