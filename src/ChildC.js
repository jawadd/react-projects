import React, { useContext } from 'react'
import { dataFirst, dataSec } from './App'

const ChildC = (name) => {
   // const name = useContext(dataFirst);
   // const info = useContext(dataSec)
   return(
      
      
      <h1>Chile C {name}</h1>
      /* <h1>My Channel Name :: {name}</h1>
      <h1>Please :: {info}</h1> */     
    )
}

export default ChildC