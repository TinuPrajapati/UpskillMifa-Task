import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Login() {
  const [username ,setName] = useState("");
  const [password ,setPassword] = useState("");
  const navigate = useNavigate();
  const url = import.meta.env.url;

  const sendData =async (e)=>{
    e.preventDefault();
    try{
       const respone=await axios.post(`${import.meta.env.VITE_API_URL}/login`,{
        username,password
      });
      localStorage.setItem("accessKey",respone.data.token)
      navigate("/welcome")
    }catch(err){
      alert(err.response.data)
    }
   
  }
  return (
    <>
      <h1>Login</h1>
      <form className="border-2 p-10 flex flex-col " onSubmit={sendData}>
        <label htmlFor="name" className="block ">
          Username:
        </label>
        <input
          type="text"
          id="name"
          required
          className="border-2 outline-none text-md"
          onChange={(e)=> setName(e.target.value)}
        />
        <label htmlFor="password" className="block ">
          Password:
        </label>
        <input
          type="password"
          id="password"
          required
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

export default Login;
