import React from "react";

const Display = ({ video }) => {
  return (
    <div className="w-[70%] h-full bg-white rounded-lg shadow-lg p-4 flex flex-col items-center gap-4">
      {video && <video src={video} controls></video>}
    </div>
  );
};

export default Display;
