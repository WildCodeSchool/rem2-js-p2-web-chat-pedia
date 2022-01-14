import GetCards from './components/GetCards';
import React from "react";
import './App.css';
import AssetsFilter from './components/AssetsFilter';
import Scroll from "./components/Scroll";

function App() {

  return (
    <div className="App">
      <Scroll />
      <div className="viewport-modifier">
        <h1>Wikipawdia</h1>
        <AssetsFilter/>
        <GetCards />
      </div>
    </div>
  )
}

export default App;
