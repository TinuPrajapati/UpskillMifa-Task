import bgImage from "./assets/gradient.jpg";
import Display from "./components/Display";
import Form from "./components/Form";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file); // Make sure this key matches the one in multer

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_Backend_url}/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            
          },
          withCredentials:true
        }
      );
      if(response.data === 0) return alert("unable to send data")
      alert(response.data.message);
      window.location.reload(false)
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    try {
      async function getData() {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_Backend_url}/show`,{
            withCredentials:true
          }
        );
        setImages(response.data);
      }
      getData();
    } catch (err) {
      alert(err);
    }
  }, []);

  return (
    <>
      <div
        className="w-[100vw] h-[100vh] bg-cover p-10 flex gap-4"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Form handleSubmit={handleSubmit} setFile={setFile} />
        <Display images={images} />
      </div>
    </>
  );
}
