import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import {Counter} from './component/Counter/Counter'
import { Chronometer } from './component/Chronometer/Chronometer';


function App() {

  
  return (
    <div className='app-container'>
      <div className='app-container-content'>
      <Counter>
      </Counter>   
      </div>
  </div>
  );
}

export default App;
