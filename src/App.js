import logo from './logo.svg';
import './App.css';
import React, { createContext, useState }  from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Error from './Error';
import Youtube from './Youtube';
import Twitter from './Twitter';
import Github from './Github';

import { BrowserRouter, Route,Routes } from 'react-router-dom';

function App() {
  

  return (
<React.Fragment> 

  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About/>}/>

    <Route path='/contact/' element={<Contact/>}>
      <Route path='youtube' element={<Youtube/>}/>
      <Route path='github' element={<Github/>}/>
      <Route path='twitter' element={<Twitter/>}/>
    </Route>

    <Route path='/login' element={<Login/>}/>
    <Route path='/login/:fname/:lname/' element={<Login/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
  
  </BrowserRouter>
  
  
   </React.Fragment>
  
        
  );
}

export default App;

