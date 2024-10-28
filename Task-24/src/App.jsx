import { useState } from "react";
import { Header } from "./Components";
import { Outlet } from "react-router-dom";
import { ItemProvider } from "./Context/ItemContext";

function App() {
  const [item,setItem]= useState([]);
  const [price,setPrice] = useState(0)
  
  const addItem=(value)=>{
    setItem([...item,{...value,count:1}])
  }

  const addPrice=(value)=>{
    setPrice((prev)=>prev+value)
  }
  return (
    <ItemProvider value={{item,price,addItem,addPrice}}>
      <Header />
      <Outlet context={{setPrice,setItem,item}}/>
    </ItemProvider>
  );
}

export default App;
