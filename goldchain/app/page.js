"use client";
import Navbar from "./components/Navbar";
import Animation from "./components/Animation/Animation";
import Homescreen from "./components/HomeComponents/Home";
import connectToContract from "@/ContractConnection/connectToContract";

export default function Home() {
  const getDetails = async () => {
    console.log("button is pressed");
    const contract = await connectToContract();

    const data = await contract.isRecord("Ritik");
    console.table(data);
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
                id="inputField"
                type="text"
                className="border border-gray-300 rounded-xl p-2 text-center w-64 text-black"
                placeholder="Enter Buyer Name"
              />
              <label className="my-2  text-white" htmlFor="inputField">
                Enter Aadhaar Number
              </label>
              <input
                id="inputField"
                type="number"
                className="inline-block border border-gray-300 rounded-xl p-2 text-center w-64 text-black"
                placeholder="Enter Aadhaar Number"
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
              Enter Gold Weight
            </label>
            <input
              id="inputField"
              type="number"
              className="border border-gray-300 rounded-xl p-2 text-center w-64 text-black"
              placeholder="Enter Buyer Name"
            />
            <label className="my-2 justify-end text-white" htmlFor="inputField">
              Enter Date
            </label>
            <input
              id="inputField"
              type="date"
              className="border border-gray-300 rounded-xl p-2 text-center w-64 text-black"
              placeholder="Enter Aadhaar Number"
            />
          </div>
          <button
            className="px-5 py-2 rounded-xl bg-yellow-400"
            onClick={() => getDetails()}
          >
            Get Details
          </button>
        </div>
      </div>
    </div>
  );
}
