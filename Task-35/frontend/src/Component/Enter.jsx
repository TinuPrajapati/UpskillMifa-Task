import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Enter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const sendDetails = async (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter your name");
    }
    if (!email) {
      alert("Please enter your email");
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BackendURL}/user`,
        { name, email },
        { withCredentials: true }
      );
      alert(response.data);
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w=[100vw] h-[100vh] flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white gap-4">
      <h1 className="text-3xl font-serif border-b-2 border-sky-400">
        Registeration
      </h1>
      <form
        className="w-[30%] h-[50%] flex flex-col items-center gap-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 py-4 px-10"
        onSubmit={sendDetails}
      >
        <div className="w-full">
          <label htmlFor="name" className="block text-xl mb-1 font-serif">
            Username:
          </label>
          <input
            type="text"
            id="name"
            className="w-[100%] h-10 rounded-md text-black outline-none px-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="block text-xl mb-1 font-serif">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-[100%] h-10 rounded-md text-black outline-none px-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="bg-white text-sky-400 w-[40%] py-3 text-xl font-serif rounded-md active:scale-90 duration-200">
          Register
        </button>
      </form>
    </div>
  );
};

export default Enter;
