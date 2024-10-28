import React, { useState } from "react";
import axios from "axios";
import bgImage from "./assets/gradient.jpg";
import Display from "./components/Display";
import Form from "./components/Form";

export default function App() {
  const [video, setVideo] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video", file);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_Backend_url}/upload-video`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (response.data === 0) return alert("unable to send data");
      alert(response.data.message);
      getData(response.data.videoPath);
    } catch (err) {
      console.log(err);
    }
  };

  async function getData(value) {
    try {
      const videoUrl = `${import.meta.env.VITE_APP_Backend_url}/video/${value}`;
      setVideo(videoUrl);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div
        className="w-[100vw] h-[100vh] bg-cover p-10 flex gap-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Form handleSubmit={handleSubmit} setFile={setFile} />
        <Display video={video} />
      </div>
    </>
  );
}
