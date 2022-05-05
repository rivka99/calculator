import logo from './logo.svg';
import CalcBoard from './CalcBoard';
import CalculatorPage from './CalculatorPage'
import SolveForPrize from './SolveForPrizes';
import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  const CalculatorComponent = () => (<CalculatorPage/>);
  const TriviaComponent = () => (<SolveForPrize/>);
  return (
  <div>
    <Router basename = {process.env.PUBLIC_URL}>
          <div className="App">
           <Routes>
            <Route exact path="/" element={<CalculatorPage/>}/>
            <Route exact path="/Trivia" element={<SolveForPrize/>}/>
          </Routes>
          </div>
        </Router>


  </div>
  );
}

export default App;
