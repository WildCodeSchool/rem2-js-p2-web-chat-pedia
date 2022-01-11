import GetCards from './components/GetCards';
import React from "react";
import './App.css';

function App() {
  return (
    <div>
      <div className="title-and-searchbar">
      <h1>Wikipawdia</h1>
      <GetCards />
    </div>
    </div>
  )
}

export default App;
