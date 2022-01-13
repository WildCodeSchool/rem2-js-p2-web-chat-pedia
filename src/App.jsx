import GetCards from './components/GetCards';
import React from "react";
import './App.css';
import Scroll  from "./components/Scroll";

function App() {
  
  return (
    <div className="App">
      <Scroll/>
    </div>
    <div className="viewport-modifier">
      <h1>Wikipawdia</h1>
      <GetCards />
    </div>
  )
}

export default App;
