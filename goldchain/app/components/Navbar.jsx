"use client";
import Link from "next/link";
import NavService from "./NavSubComponents/NavService";
import connectToContract from "@/ContractConnection/connectToContract";

export default function Navbar() {
  async function connectContract() {
    const contract = await connectToContract();
    console.table(contract);
  }
  return (
    <div className="w-52 h-screen bg-gray-800 text-white p-4 fixed z-10">
      <div>
        <div href="/" className="block p-2 hover:bg-gray-700 rounded">
          Home
        </div>
      </div>
      <div className="bg-gray-900 rounded-lg ">
        <div href="/about" className="block p-2 hover:bg-gray-700 rounded">
          About
        </div>
      </div>
      <div>
        <div className="group relative">
          <div href="/services" className="block p-2 hover:bg-gray-700 rounded">
            Services
          </div>
          <div className="hidden group-hover:block absolute left-[6rem] -top-20 mt-2 w-48 bg-blue-600 text-white shadow-lg rounded-xl">
            <NavService name={"Service 1"} />
            <NavService name={"Service 2"} />
            <NavService name={"Service 3"} />
            <NavService name={"Service 4"} />
            <NavService name={"Service 5"} />
            <NavService name={"Service 6"} />
          </div>
        </div>
      </div>
      <div>
        <div href="/contact" className="block p-2 hover:bg-gray-700 rounded">
          Contact
        </div>
      </div>
      <div>
        <button
          className="bg-gradient-to-r from-green-500 to-indigo-600  m-5 px-5 py-2 text-white rounded-xl shadow-2xl shadow-black"
          onClick={() => connectContract()}
        >
          Connect
        </button>
      </div>
    </div>
  );
}
