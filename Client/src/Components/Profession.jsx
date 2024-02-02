import { useContext } from "react";
import { FormContext } from "./Context";
const Profession = ()=>{
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
                <label htmlFor="firstName" className="block text-sm outline-none font-medium text-gray-600">
                  Your Profession
                </label>
                <input
                onChange={handleChange}
                value={FormData.profession}
                  type="text"
                  name="profession"
                  className="mt-1 p-2 w-full border outline-none rounded-md"
                  placeholder="Enter Your Profession"
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm  font-medium text-gray-600">
                  Current Company
                </label>
                <input
                                onChange={handleChange}
                                value={FormData.companyName}
                  type="text"
                  name="companyName"
                  className="mt-1 p-2 w-full border outline-none rounded-md"
                  placeholder="Enter Company Name"
                />
              </div>
    
            
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                  Mode
                </label>
             <select
              onChange={handleChange}
              value={FormData.mode}
             name="mode" className="mt-1 p-2 w-full border rounded-md outline-none">
                <option value={'Work from Home'}>
                    Work from Home
                </option>
                <option value={'Offlineoutline-none '}>
                    Offline
                </option>
             </select>
              </div>
          </div>
        </div>
        </>
    )
    
    }
    
    export default Profession