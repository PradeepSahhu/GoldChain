export default function SearchGold() {
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
                className="border border-gray-300 rounded-xl p-2 text-center w-64 text-black"
                placeholder="Enter Buyer Name"
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
                className="border border-gray-300 rounded-xl p-2 text-center w-64 text-black"
                placeholder="Enter HUID Number"
              />
            </div>
          </div>
          <div className="flex justify-center mt-[5rem]">
            <button className="px-5 py-2 bg-gray-700 rounded-xl ">
              Check from Records
            </button>
          </div>
        </div>
      </div>

      <div>
        <table className="table-auto w-full mt-10">
          <thead>
            <tr className="text-white bg-darkblue rounded-lg">
              <th className="px-4 py-4 text-start font-normal">S.no</th>
              <th className="px-4 py-4 text-start font-normal">Name</th>
              <th className="px-4 py-4 font-normal">Friend Address</th>
              <th className="px-4 py-4 font-normal">age</th>
              <th className="px-4 py-4 font-normal">Message</th>
              <th className="px-4 py-4 font-normal">Added Date</th>
            </tr>
          </thead>
          <tbody>
            <tr key={1} className="border-b border-b-darkblue">
              <td className="px-4 py-6 text-center text-white">{1}</td>

              <td className="px-4 py-6 text-center text-white">
                {"Pradeep Sahu"}
              </td>
              <td className={`px-4 py-6 text-center `}>{"Ox12121212121212"}</td>
              <td className="px-4 py-6 text-center text-white">{12}</td>
              <td className={`px-4 py-6 text-center `}>{"No need"}</td>
              <td className={`px-4 py-6 text-center `}>{12 - 12 - 2002}</td>
            </tr>
            {/* {friendList.map((eachFriend, i) => (
              <tr key={i} className="border-b border-b-darkblue">
                <td className="px-4 py-6 text-center text-white">{i + 1}</td>

                <td className="px-4 py-6 text-center text-white">
                  {eachFriend.name}
                </td>
                <td className={`px-4 py-6 text-center `}>
                  {eachFriend.friendAddress}
                </td>
                <td className="px-4 py-6 text-center text-white">
                  {parseInt(eachFriend.age)}
                </td>
                <td className={`px-4 py-6 text-center `}>
                  {eachFriend.message}
                </td>
                <td className={`px-4 py-6 text-center `}>{eachFriend.date}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
