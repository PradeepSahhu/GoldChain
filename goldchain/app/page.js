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
    <div className="font-myFon bg-black">
      <Navbar />

      <div className="z-1">
        <div className="relative left-56">
          <Homescreen />
        </div>
      </div>
      <div class="absolute top-100vh w-full left-56 flex justify-center -z-10">
        <img className="opacity-30 w-full z-0" src="grid.svg" />
      </div>
      <div className="ml-56 h-[100vh] bg-purple-500 z-10">
        <div className="">
          <p>Welcome to 2nd section</p>
        </div>
        <div className="">
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
