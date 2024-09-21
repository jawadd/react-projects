import logo from './logo.svg';
import './App.css';
import React, { useState }  from 'react';
import ChildA from './ChildA'

function App() {
  const name=" Code with Jawad using Prop Drilling";

  return (
<React.Fragment> 
  <h1>PROPS DRILLING </h1>
  <br></br>
  <ChildA name={name}/>
   </React.Fragment>
  
        
  );
}

export default App;
