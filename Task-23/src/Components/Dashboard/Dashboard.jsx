import React from "react";

export default function Dashboard() {
  return (
    <div className="h-[80vh] flex flex-col justify-center  gap-5 items-center bg-gray-100 p-4">
      <p className="text-lg font-bold">Welcome To Upskill Mifa Platform</p>
      <h2 className="text-2xl font-bold mb-4">This Platform help us to improve our skill and provide too much feature</h2>
      <p className="text-base mb-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam rem amet asperiores officiis sed, optio quod praesentium numquam dolore aut?</p>
      <div className="flex gap-4">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Register Now</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Explore Now</button>
      </div>
    </div>
  );
}