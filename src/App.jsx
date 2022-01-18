import React from "react";
import { Routes, Route } from 'react-router-dom';
import Deposit from './pages/Deposit';
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar'
import Scroll from "./components/scroll/Scroll";
import './App.css';

function App() {

  return (
    <div className="App">
      <Scroll />
      <NavBar />
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route path="depot" element={< Deposit />} />
        <Route path="login" element={< Login />} />
      </Routes>
      {/* <div className='footer'> */}
        <Footer />
      {/* </div> */}
    </div>
  )
}


export default App;
