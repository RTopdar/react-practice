// eslint-disable-next-line no-unused-vars
import React from "react"
import { useState, useEffect } from "react";

const App = () => {
  // let counter = 0;
  const [counter, setCounter] = useState(0);
  const increment=()=>{
    setCounter(counter+1);
  }
  useEffect(()=>{
    console.log(counter);
  },[counter])
  return (
    <div className="flex justify-center items-center bg-slate-600 w-screen h-screen">
        <div className="text-5xl text-white">{counter}</div>
        <button className="rounded-full bg-blue-900 text-white w-60 h-20 ml-10" onClick={increment}>Click Here</button>
    </div>
  )
};

export default App;
