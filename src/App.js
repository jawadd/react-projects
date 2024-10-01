import logo from './logo.svg';
import './App.css';
import React, { createContext, useState }  from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  

  return (
<React.Fragment> 

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
  </Routes>
  
  </BrowserRouter>
  
  
   </React.Fragment>
  
        
  );
}

export default App;

