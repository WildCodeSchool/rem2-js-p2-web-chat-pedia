import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import Deposit from './pages/Deposit';
import Home from './pages/Home';
import Login from './pages/Login';
import GetCards from './components/GetCards';
import React from "react";
import './App.css';
import Footer from './components/Footer';
import SearchBar from "./components/SearchBar";
// import AssetsFilter from './components/AssetsFilter';
import Scroll from "./components/Scroll";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route path="depot" element={< Deposit />} />
        <Route path="login" element={< Login />} />
      </Routes>
      <SearchBar />
      <Scroll />
      <div className="viewport-modifier">
        {/* <AssetsFilter/> */}
        <GetCards />
        <Footer />
      </div>
    </div>
  )
}


export default App;
