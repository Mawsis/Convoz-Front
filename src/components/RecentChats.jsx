import React from "react";

const RecentChats = () => {
  return (
    <div className="w-full h-full p-2">
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <div className="w-full h-[24%] relative">
          <div className="absolute inset-0 w-full items-center h-full border-2 rounded-md p-1 bg-gray-800 border-green-600 flex gap-4 transition duration-300 ease-in-out transform hover:scale-[120%] hover:z-50 hover:shadow-lg hover:shadow-green-600">
            <img
              src={`https://i.pravatar.cc/?u=${Math.random()}`}
              alt=""
              className=" aspect-square h-2/3 rounded-full border border-green-600"
            />
            <div className="h-full flex flex-col justify-between">
              <h2 className="text-xl font-bold">Sarah</h2>
              <p className="">Hello, how are you?</p>
              <p className="text-gray-400">3 Hours ago</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[24%] relative">
          <div className="absolute inset-0 w-full items-center h-full border-2 rounded-md p-1 bg-gray-800 border-green-600 flex gap-4 transition duration-300 ease-in-out transform hover:scale-[120%] hover:z-50 hover:shadow-lg hover:shadow-green-600">
            <img
              src={`https://i.pravatar.cc/?u=${Math.random()}`}
              alt=""
              className=" aspect-square h-2/3 rounded-full border border-green-600"
            />
            <div className="h-full flex flex-col justify-between">
              <h2 className="text-xl font-bold">Sarah</h2>
              <p className="">Hello, how are you?</p>
              <p className="text-gray-400">3 Hours ago</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[24%] relative">
          <div className="absolute inset-0 w-full items-center h-full border-2 rounded-md p-1 bg-gray-800 border-green-600 flex gap-4 transition duration-300 ease-in-out transform hover:scale-[120%] hover:z-50 hover:shadow-lg hover:shadow-green-600">
            <img
              src={`https://i.pravatar.cc/?u=${Math.random()}`}
              alt=""
              className=" aspect-square h-2/3 rounded-full border border-green-600"
            />
            <div className="h-full flex flex-col justify-between">
              <h2 className="text-xl font-bold">Sarah</h2>
              <p className="">Hello, how are you?</p>
              <p className="text-gray-400">3 Hours ago</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[24%] relative">
          <div className="absolute inset-0 w-full items-center h-full border-2 rounded-md p-1 bg-gray-800 border-green-600 flex gap-4 transition duration-300 ease-in-out transform hover:scale-[120%] hover:z-50 hover:shadow-lg hover:shadow-green-600">
            <img
              src={`https://i.pravatar.cc/?u=${Math.random()}`}
              alt=""
              className=" aspect-square h-2/3 rounded-full border border-green-600"
            />
            <div className="h-full flex flex-col justify-between py-3">
              <h2 className="text-xl font-bold">Sarah</h2>
              <p className="">Hello, how are you?</p>
              <p className="text-gray-400">3 Hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentChats;
