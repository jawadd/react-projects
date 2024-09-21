import logo from './logo.svg';
import './App.css';
import React, { createContext, useState }  from 'react';
import ChildA from './ChildA'
const firstName= createContext();
  const lastName= createContext();
function App() {
  

  return (
<React.Fragment> 
  <firstName.Provider value={"Jawad"}>
    <lastName.Provider value={"Hussain"}>
    <ChildA />
    </lastName.Provider>
  </firstName.Provider>
  
   </React.Fragment>
  
        
  );
}

export default App;
export {firstName,lastName}
