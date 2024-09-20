import React, { useEffect, useState } from 'react'
 
const UseEffectHook = () => {
   const [num, setNum] = useState(0)
   const [data , setData] = useState("CODE")

   const increment = () =>{
       setNum(num+1)
   }
   const decrement = () =>{
      
           setNum(num-1)
         
   }

   const change = () =>{
       setData("Code with Jawad")
   }
   

   useEffect(()=>{
       // console.log("Running useEffect()");
       alert("Running useEffect")
   }, [data])
    
  return (
    <>
    <h1>{data}</h1>
       <div className='container'>
           <h1>{num}</h1>
           <div className='btn'>
               <button onClick={increment}>Increment</button>
               <button onClick={decrement}>Decrement</button>
               <button onClick={change}>Change</button>
                

           </div>
       </div>
    </>
  )
}

export default UseEffectHook