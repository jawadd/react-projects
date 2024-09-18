import logo from './logo.svg';
import './App.css';
import React, { useState }  from 'react';

function App() {
  
  const[count, setCount] = useState(0);

  const increment =() =>{
    setCount(count+1)
  }
  const decrement =() =>{
    setCount(count-1)
  }
  return (
    
<React.Fragment> 
  <div className='box'>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>  <button onClick={decrement}>Decrement</button>
  </div>
   </React.Fragment>
  
        
  );
}

export default App;
