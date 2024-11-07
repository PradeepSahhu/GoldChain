"use client";
import { useState } from "react";
import connectToContract from "@/ContractConnection/connectToContract";

export default function SearchGold() {
  const [userInputs, setUserInputs] = useState({
    aadhaarNumber: "",
    goldHUID: "",
  });

  const [userData, setUserData] = useState();

  const [userList, setUserList] = useState();
  const searchGoldRecords = async () => {
    setUserData(null);

    console.table([userInputs]);
    try {
      const contract = await connectToContract();
      if (userInputs.aadhaarNumber.trim() === "") {
        console.log("aadhaar number is empty");
        const response = await contract.isRecordByHUID(
          parseInt(userInputs.goldHUID)
        );
        console.log(response);
        setUserData(response);
        console.log("user data is : ", userData);
      } else {
        console.log("gold number is empty");
        const response = await contract.isRecordByAadhaar(
          userInputs.aadhaarNumber
        );
        console.log(response);
        setUserData(response);
        console.log("user data is : ", userData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAllRecords = async () => {
    try {
      const contract = await connectToContract();

      if (userInputs.aadhaarNumber.trim() !== "") {
        const res = await contract.getAllRecordsForAadhaar(
          userInputs.aadhaarNumber
        );
        setUserList(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setUserInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };
  return (
    <div className="">
      <div className="absolute w-full flex justify-center -z-10">
        <img className="opacity-30 w-full " src="grid.svg" />
      </div>

      <div className=" z-10">
        <div className="">
          <p className="font-bold text-[2rem] flex justify-center">
            Find Your Gold
          </p>
          <p className="font-extralight flex justify-center">
            Check for the current status of gold from our records
          </p>
        </div>

        <div className="">
          <div className="flex justify-center">
            <div className="flex flex-col mt-[5rem] ">
              <label className="mb-2  text-white" htmlFor="inputField">
                Enter Aadhaar Number
              </label>
              <input
                id="inputField"
                type="text"
                name="aadhaarNumber"
                className="border border-gray-300 rounded-xl p-2 text-center w-64 text-black"
                placeholder="Enter Buyer Name"
                onChange={handleInputChange}
              />
            </div>
            <div className="text-white mx-[10rem] flex items-center">
              <p className="text-[4rem] "> OR </p>
            </div>
            <div className="flex flex-col mt-[5rem] ml-[5rem]">
              <label className="mb-2  text-white" htmlFor="inputField">
                Enter HUID Number
              </label>
              <input
                id="inputField"
                type="number"
                name="goldHUID"
                className="border border-gray-300 rounded-xl p-2 text-center w-64 text-black"
                placeholder="Enter HUID Number"
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex justify-center mt-[5rem]">
            <button
              className="px-5 py-2 bg-gray-700 rounded-xl "
              onClick={searchGoldRecords}
            >
              Check from Records
            </button>
          </div>
        </div>
      </div>

      {userData && (
        <div>
          <table className="table-auto w-full mt-10">
            <thead>
              <tr className="text-white bg-darkblue rounded-lg">
                <th className="px-4 py-4 text-start font-normal">S.no</th>
                <th className="px-4 py-4 text-start font-normal">Buyer Name</th>
                <th className="px-4 py-4 font-normal">Aadhaar Number</th>
                <th className="px-4 py-4 font-normal">Gold HUID</th>
                <th className="px-4 py-4 font-normal">Date</th>
                <th className="px-4 py-4 font-normal">
                  {" "}
                  Additional Information
                </th>
              </tr>
            </thead>
            <tbody>
              <tr key={1} className="border-b border-b-darkblue">
                <td className="px-4 py-6 text-center text-white">{1}</td>

                <td className="px-4 py-6 text-center text-white">
                  {userData[0]}
                </td>
                <td className={`px-4 py-6 text-center `}>{userData[1]}</td>
                <td className="px-4 py-6 text-center text-white">
                  {parseInt(userData[3])}
                </td>
                <td className={`px-4 py-6 text-center `}>{userData[2]}</td>
                <td className={`px-4 py-6 text-center `}>
                  {parseInt(userData[4])}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center">
            <button
              className="px-8 py-3 bg-gray-600 rounded-xl my-5 bg-gradient-to-r hover:from-gray-500 hover:to-cyan-500"
              onClick={getAllRecords}
            >
              Show Complete from this Aadhaar Card
            </button>
          </div>
        </div>
      )}

      {userList && (
        <table className="table-auto w-full my-10">
          <thead>
            <tr className="text-white bg-darkblue rounded-lg">
              <th className="px-4 py-4 text-start font-normal">S.no</th>
              <th className="px-4 py-4 text-start font-normal">Buyer Name</th>
              <th className="px-4 py-4 font-normal">Aadhaar Number</th>
              <th className="px-4 py-4 font-normal">Gold HUID</th>
              <th className="px-4 py-4 font-normal">Date</th>
              <th className="px-4 py-4 font-normal"> Additional Information</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((eachUser, i) => (
              <tr key={i} className="border-b border-b-darkblue">
                <td className="px-4 py-6 text-center text-white">{i + 1}</td>

                <td className="px-4 py-6 text-center text-white">
                  {eachUser.buyerName}
                </td>
                <td className={`px-4 py-6 text-center `}>
                  {eachUser.aadhaarNumber}
                </td>
                <td className="px-4 py-6 text-center text-white">
                  {parseInt(eachUser.goldHUID)}
                </td>
                <td className={`px-4 py-6 text-center `}>
                  {parseInt(eachUser.date)}
                </td>
                <td className={`px-4 py-6 text-center `}>
                  {eachUser.goldInfo}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
