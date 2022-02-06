import logo from './logo.svg';
import CalcBoard from './CalcBoard';
import './App.css';
import { HashRouter, HashRouter as Router, Route, Routes } from 'react-router-dom'

const digits = [{id:1, digit:'1'},{id:2,digit:'2'},{id:3,digit:'3'},{id:10, digit:'+'},{id:11, digit:'-'}]
function App() {
  return (
    <CalcBoard digits={digits}/>
  );
}

export default App;
