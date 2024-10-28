import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Form() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Available");
  const navigate = useNavigate();

  const sendData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
       `${import.meta.env.VITE_backend_url}/save`,
        {
          title,
          description,
          price,
          author,
          status,
        },
        {
          withCredentials: true,
        }
      );
      alert(response.data.msg);
      navigate("/show");
    } catch (err) {
      console.log(err);
    }
    setTitle("");
    setDescription("");
    setPrice("");
    setAuthor("");
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col gap-4 justify-center items-center text-lg text-white">
      <h1 className="text-3xl font-serif border-b-2 border-sky-400">
        Enter Book Details
      </h1>
      <form
        className="w-[30%] h-[60%] bg-white rounded-lg flex flex-col items-center gap-4 text-black py-4 px-10"
        onSubmit={sendData}
      >
        <table>
          <tr>
            <td>
              <label htmlFor="">Title</label>
            </td>
            <td>
              <input
                type="text"
                className="border-2 w-full rounded-md h-10 px-4 outline-none text-md"
                onChange={(e) => setTitle(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Description</label>
            </td>
            <td>
              <input
                type="text"
                className="border-2 w-full rounded-md h-10 px-4 outline-none text-md"
                onChange={(e) => setDescription(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Author</label>
            </td>
            <td>
              <input
                type="text"
                className="border-2 w-full rounded-md h-10 px-4 outline-none text-md"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Status</label>
            </td>
            <td>
              <select
                className="border-2 w-full rounded-md h-10 px-4 outline-none text-md"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Available">Available</option>
                <option value="Sold">Sold</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="">Price</label>
            </td>
            <td>
              <input
                type="text"
                className="border-2 w-full rounded-md h-10 px-4 outline-none text-md"
                onChange={(e) => setPrice(e.target.value)}
              />
            </td>
          </tr>
        </table>
        <button
          type="submit"
          className="w-[50%] rounded-md bg-sky-400 text-white text-xl font-serif py-2 active:scale-90"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
