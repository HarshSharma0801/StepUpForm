import { useState , useContext } from "react"
import { FormContext } from "./Context"


const PersonalDetails = ()=>{
 
  const {Changed , FormData} = useContext(FormContext);

  const handleChange =(e)=>{
      const {name,value} = e.target;
     Changed(name,value)
  }

return (
    <>
     <div className="flex items-center justify-center ">
      <div className="bg-white p-8 rounded shadow-md w-96">
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
            onChange={handleChange}
            value={FormData.firstName}
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 p-2 w-full border outline-none rounded-md"
              placeholder="Enter First Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
                  onChange={handleChange}
                  value={FormData.lastName}
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 p-2 w-full border outline-none rounded-md"
              placeholder="Enter Last Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
             onChange={handleChange}
             value={FormData.email}
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border outline-none rounded-md"
              placeholder="Enter Email Address"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
              Phone Number
            </label>
            <input
             onChange={handleChange}
             value={FormData.phoneNumber}
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="mt-1 p-2 w-full border outline-none rounded-md"
              placeholder="Enter Phone Number"
            />
          </div>
      </div>
    </div>
    </>
)

}

export default PersonalDetails