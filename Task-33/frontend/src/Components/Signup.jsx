import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function Signup() {
  const [username ,setName] = useState("");
  const [password ,setPassword] = useState("");
  const navigate = useNavigate();
  

  const sendData =async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`,{
        username,password
      });
      navigate("/login")
      alert(`Status:${response.status} and ${response.data}`)
    }catch(err){
      alert(`Status:${err.status} and ${err.response.data}`)
    }
  }

  return (
    <>
      <h1>Register</h1>
      <form action="/login" className="border-2 p-10 flex flex-col " onSubmit={sendData}>
        <label htmlFor="name" className="block ">
          Username:
        </label>
        <input
          type="text"
          id="name"
          className="border-2 outline-none text-md"
          onChange={(e)=> setName(e.target.value)}
        />
        <label htmlFor="password" className="block ">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="border-2 outline-none text-md"
          onChange={(e)=> setPassword(e.target.value)}
        />
        <br />
        
        <button type="submit" className="border-2 py-2 active:scale-90">
          Submit
        </button>
      </form>
    </>
  );
}

export default Signup;
