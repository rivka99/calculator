import logo from './logo.svg';
import CalcBoard from './CalcBoard';
import './App.css';
import { useState } from 'react';
import { HashRouter, HashRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const digits = [{id:0,digit:'0'},{id:1, digit:'1'},{id:2,digit:'2'},{id:3,digit:'3'},{id:4, digit:'4'},{id:5,digit:'5'},
  {id:6,digit:'6'},{id:7, digit:'7'},{id:8,digit:'8'},{id:9,digit:'9'},{id:100, digit:'.'},{id:10, digit:'+'},
  {id:11, digit:'-'},{id:12, digit:'*'},{id:13, digit:'÷'},{id:14, digit:'^'},{id:15, digit:'!'}]
  const [input, setInput] = useState("")
  const [prevResult, setPrevResult] = useState("")
  return (
  <div>
    <h1>React Calculator</h1>
    <CalcBoard digits={digits} input={input} setInput={setInput} prevResult={prevResult} setPrevResult={setPrevResult}/>
    </div>
  );
}

export default App;
