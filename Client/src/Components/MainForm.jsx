import { useState } from "react";
import AddressDetails from "./Address";
import BankingDetails from "./BankingDetails";
import PersonalDetails from "./PersonalDetails";
import Profession from "./Profession";

const MainForm = () => {
  const [Page, setPage] = useState(0);

  const Content = [
    "Personal Details",
    "Banking Details",
    "Profession Details",
    "Address Details",
  ];
  let width = Number(((Page + 1) / 4) * 100);
  console.log(width);
  return (
    <>
      <div className="w-screen h-screen">
        <div className="flex justify-center p-5">
          <div>
            <div className="flex justify-start p-3">
              <div
                className={`w-[${width}%] bg-[#F86F03] rounded-full h-3`}
              ></div>
            </div>
            <h1 className="text-3xl font-bold text-[#F86F03]">
              {Content[Page]}
            </h1>
          </div>
        </div>
        <div>
          {Page === 0 && <PersonalDetails />}
          {Page === 1 && <BankingDetails />}
          {Page === 2 && <Profession />}
          {Page === 3 && <AddressDetails />}
        </div>
        <div className="flex justify-center p-6">
          <div className="flex gap-40">
            <button
              disabled={Page === 0}
              onClick={() => {
                setPage((page) => {
                  return page - 1;
                });
              }}
              className="border border-[#F86F03] rounded-xl px-5 py-4 text-lg text-[#F86F03] hover:bg-[#F86F03] hover:text-white"
            >
              Prev
            </button>
            {Page === Content.length - 1 ? (
              <button
                onClick={() => {
                  alert("Your response is taken");
                }}
                className="border rounded-xl border-[#F86F03] px-5 py-4 text-lg text-[#F86F03] hover:bg-[#F86F03] hover:text-white"
              >
                Submit
              </button>
            ) : (
              <button
                disabled={Page === Content.length - 1}
                onClick={() => {
                  setPage((page) => {
                    return page + 1;
                  });
                }}
                className="border rounded-xl border-[#F86F03] px-5 py-4 text-lg text-[#F86F03] hover:bg-[#F86F03] hover:text-white"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainForm;
