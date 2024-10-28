import React from "react";

export default function Login() {
  return (
    <div className="w-full h-[80vh] flex flex-col gap-4 justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-serif font-semibold">Login</h1>
      <form
        action="#"
        className="w-[40%] h-[60%] rounded-md p-4 flex flex-col items-center justify-evenly bg-white shadow-xl"
      >
        <div className="flex w-full mb-4">
          <label
            htmlFor="username"
            className="w-[30%] text-gray-700 text-sm font-bold mb-2"
          >
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex w-full mb-4">
          <label
            htmlFor="password"
            className="w-[30%] text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <button className=" bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold py-3 px-10 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
