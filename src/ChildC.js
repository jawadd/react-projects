import React, { useContext } from 'react'
import { firstName, lastName } from './App'

const ChildC = ({name}) => {
    const firstNam = useContext(firstName);
   const lastNam = useContext(lastName)
   return(
      
      <div>
      <div><h1>First Name :: {firstNam}</h1></div>
      <div><h1>Last Name :: {lastNam}</h1></div>
    </div>
          
    )
}

export default ChildC