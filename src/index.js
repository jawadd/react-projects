import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home'
import About from './About'
import MainPage from './MainPage';
import Card from './Card';
import Condition  from './Condition';
import Clock from './Clock';
import Events from './Events';
import Form from './Form';
import UseEffectHook from './UseEffectHook';
import Ref from './Ref';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <MainPage /> */}
  <App />
  </React.StrictMode>
);


