import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/feature/conterSlice";
const App = () => {
  const dispatch = useDispatch();
  const [num, setNum] = useState(5);
  const count = useSelector((state) => state.counter.value);
  return (
    <div className="min-h-screen flex bg-gray-300 justify-center items-center bg-greay-900 flex-col gap-2">
      <h1 className="text-3xl font-bold">Redux Counter</h1>
      <div className="bg-gray-700 w-[50%] max-w-md rounded flex gap-2 flex-col justify-center items-center text-white p-6">
     <div className="count">
       <h1 className="bg-white text-black text-3xl font-bold px-8 py-2 rounded-lg shadow-md">{count}</h1>
     </div>
      <div className="flex gap-2 justify-center items-center mt-2">
        <button
      className="px-5 py-2 bg-green-500 hover:bg-green-600 active:scale-95 text-white font-semibold rounded-lg shadow-md transition-all duration-200"        onClick={() => {
          dispatch(increment());
        }}
      >
        Incremnet
      </button>
      <button
      className="px-5 py-2 bg-red-500 hover:bg-red-600 active:scale-95 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decremnet
      </button>

      </div>
      <h1>Enter Number of Count</h1>
      <input
      className="w-full max-w-xs px-4 py-2 text-black bg-white border-2 border-gray-300 rounded-lg shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
        placeholder="Enter Number"
        
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />
      <button
     className="px-5 py-2 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-semibold rounded-lg shadow-md transition-all duration-200"
        onClick={() => {
          dispatch(incrementByAmount(Number(num)));
        }}
      >
        Increase By {num}
      </button>
    </div>
    </div>
  );
};

export default App;
