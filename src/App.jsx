import React from "react";
import { Routes, Route } from 'react-router-dom';
import Chat from './pages/chat/Chat';
import Deposit from './pages/deposit/Deposit';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NavBar from './components/navbar/NavBar'
import Results from "./pages/results/Results";
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
        <Route path="chat" element={< Chat />} />
        <Route path="results/:query" element={< Results />} />
      </Routes>
      {/* <div className='footer'> */}
        <Footer />
      {/* </div> */}
    </div>
  )
}


export default App;
