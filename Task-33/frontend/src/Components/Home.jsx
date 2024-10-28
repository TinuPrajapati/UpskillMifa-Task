import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [msg, setMsg] = useState("");

  async function getdata() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/protected`,
        { withCredentials: true }
      );
      alert(`Status:${response.status} and ${response.data.alert} `)
      setMsg(response.data.msg);
      // console.log(response)
    } catch (err) {
      alert(`status:${err.status} and ${err.response.data}`)
      setMsg("Please login again");
    }
  }

  return (
    <>
      <h1>Welcome</h1>
      <button onClick={getdata} className="border-2 py-2 px-6">
        Check Data
      </button>
      {msg && <p>{msg}</p>}
    </>
  );
}

export default Home;
