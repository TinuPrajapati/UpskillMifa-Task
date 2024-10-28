import React, { useState } from "react";
import axios from "axios";

export default function Form({ handleSubmit, setFile }) {
  const [video, setVideo] = useState("");

  const showImage = (e) => {
    const file = e.target.files[0];
    setFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setVideo(reader.result);
    };
    reader.readAsDataURL(file);
  }; 

  return (
    <div className="w-[30%] h-full bg-white rounded-lg shadow-lg p-4 flex flex-col justify-center items-center gap-8">
      <h1 className="text-2xl font-serif border-b-2 border-sky-500 ">
        Video Upload
      </h1>
      <form
        className="flex justify-center items-center gap-4"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <input
          type="file"
          id="image"
          name="image"
          className="hidden"
          onChange={showImage}
        />
        <label
          htmlFor="image"
          className=" bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-xl py-2 w-[100%] px-4 font-serif rounded-md"
        >
          Upload Video
        </label>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl py-2 px-4 font-serif rounded-md"
        >
          Submit
        </button>
      </form>
      <div className="w-full h-[50%]">
        <p className="font-serif text-center">Preview Image</p>
        {video && (
          <video src={video} controls></video>
        )}
      </div>
    </div>
  );
}
