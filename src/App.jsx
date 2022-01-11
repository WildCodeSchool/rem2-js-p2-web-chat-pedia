import FirstFilter from './components/FirstFilter'
import GetCards from './components/GetCards';
import NoResult from './assets/NoResult.png';
import React from "react";
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <div>
      <div className="title-and-searchbar">
      <h1>Wikipawdia</h1>
      <SearchBar/>
      <FirstFilter/>
      <GetCards />
    </div>
    </div>
  )
}

export default App;
