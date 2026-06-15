import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment,decrement,incrementByAmount} from "./redux/feature/conterSlice";
const App = () => {
   const dispatch = useDispatch()
   const [num, setNum] = useState(5)
   const count = useSelector((state) => state.counter.value)
  return (
    <div>
     <h1>{count}</h1>
     <button
     onClick={()=>{
      dispatch(increment())
     }}>Incremnet</button>
     <button
     onClick={()=>{
        dispatch(decrement())
     }}>Decremnet</button>

     <input type="number" 
     onChange={(e)=>{
      setNum(e.target.value)
     }} />
     <button
     onClick={
      ()=>{
      dispatch(incrementByAmount(Number(num)))
      }
     }
     >Increase By {num}</button>
    </div>
  )
}

export default App
