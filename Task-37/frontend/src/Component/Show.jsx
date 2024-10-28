import React, { useState, useEffect } from "react";
import axios from "axios";

function Show() {
  const [data, setData] = useState([]);
  const [sortData, setSortData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response1 = await axios.get(
          `${import.meta.env.VITE_backend_url}/group`,
          {
            withCredentials: true,
          }
        );
        setData(response1.data.data);
        setSortData(response1.data.details);
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col gap-4 justify-center items-center text-lg text-white">
      <h1 className="text-3xl font-serif border-b-2 border-sky-400">
        Aggregate Data
      </h1>

      <p>Group data by a specific field</p>
      <table className="border-2 w-[30%] p-4">
        <thead>
          <td>Book By</td>
          <td>Count</td>
        </thead>
        <tbody>
          {data.map((el, index) => (
            <tr key={index}>
              <td>{el._id}</td>
              <td>{el.authorBook}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Sort the data by a specific field</p>
      <table className="border-2 table-auto w-[30%]">
        <thead>
          <td>Book Name</td>
          <td>Price</td>
        </thead>
        <tbody>
          {sortData.map((el, index) => (
            <tr key={index}>
              <td>{el._id}</td>
              <td>{el.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Show;
