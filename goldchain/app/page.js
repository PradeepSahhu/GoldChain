"use client";
import Navbar from "./components/Navbar";
import Animation from "./components/Animation/Animation";
import Homescreen from "./components/HomeComponents/Home";
import connectToContract from "@/ContractConnection/connectToContract";
import { useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState({
    buyerName: "",
    aadhaarNumber: "",
    goldInfo: "New Gold",
    goldHUID: "",
    date: "",
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setUserData((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const insertRecords = async () => {
    console.log("button is pressed");
    console.log(userData);
    const contract = await connectToContract();
    try {
      const data = await contract.newRecord(
        userData.buyerName,
        userData.aadhaarNumber,
        parseInt(userData.goldHUID),
        userData.goldInfo,
        userData.date
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="font-myFont">
      <Navbar />

      <div className="z-1">
        <div className="relative left-56">
          <Homescreen />
        </div>
      </div>
      <div className="absolute w-full flex justify-center -z-10">
        <img className="opacity-30 w-full " src="grid.svg" />
      </div>
      <div className="ml-56  z-10">
        <div className="">
          <p className="font-bold text-[2rem] flex justify-center">
            Register Your Gold
          </p>
        </div>
        <div className="">
          <div className="flex">
            <div className="flex flex-col mt-[5rem]">
              <label className="mb-2  text-white" htmlFor="inputField">
                Enter Name
              </label>
              <input
                name="buyerName"
                id="inputField"
                type="text"
                className="border border-gray-300 rounded-xl p-2 text-center w-64 text-black"
                placeholder="Enter Buyer Name"
                onChange={handleInputChange}
              />
              <label className="my-2  text-white" htmlFor="inputField">
                Enter Aadhaar Number
              </label>
              <input
                id="inputField"
                type="text"
                name="aadhaarNumber"
                className="inline-block border border-gray-300 rounded-xl p-2 text-center w-64 text-black"
                placeholder="Enter Aadhaar Number"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex mt-10 ml-[30rem]">
              <div>
                <img src="" className="h-[10rem] w-[10rem]" />
                <input
                  id="fileUpload"
                  className="my-2  rounded-xl p-2 w-64 cursor-pointer"
                  type="file"
                  accept="image/*"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-x-10 my-5">
            <label className="mb-2  text-white" htmlFor="inputField">
              Enter Gold HUID
            </label>
            <input
              id="inputField"
              type="text"
              name="goldHUID"
              className="border border-gray-300 rounded-xl p-2 text-center w-64 text-black"
              placeholder="Enter Gold HUID"
              onChange={handleInputChange}
            />
            <label className="my-2 justify-end text-white" htmlFor="inputField">
              Enter Date
            </label>
            <input
              id="inputField"
              type="date"
              name="date"
              className="border border-gray-300 rounded-xl p-2 text-center w-64 text-black"
              placeholder="Enter Aadhaar Number"
              onChange={handleInputChange}
            />
          </div>
          <div className="flex ml-[30rem] my-10">
            <button
              className="px-5 py-2 rounded-xl bg-gray-800 hover:scale-95 transition-all duration-300 hover:bg-gradient-to-r hover:from-slate-800 hover:to-rose-800"
              onClick={() => insertRecords()}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
