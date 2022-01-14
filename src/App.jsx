import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import Deposit from './pages/Deposit';
import Home from './pages/Home';
import Login from './pages/Login';
import GetCards from './components/GetCards';
import React from "react";
import './App.css';
import Scroll  from "./components/Scroll";

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route path="depot" element={< Deposit />} />
          <Route path="login" element={< Login />} />
        </Routes>
      </header>
      <Scroll/>
      <div className="viewport-modifier">
        <h1>Wikipawdia</h1>
        <GetCards />
      </div>
    </div>
    
  )
}

export default App;
