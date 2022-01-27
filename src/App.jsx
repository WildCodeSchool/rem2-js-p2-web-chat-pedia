import React from "react";
import { Routes, Route } from 'react-router-dom';
import Chat from './pages/chat/Chat';
import Deposit from './pages/deposit/Deposit';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import NavBar from './components/navbar/NavBar'
import Scroll from "./components/scroll/Scroll";
import './App.css';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false)
  const [userLoggedData, setUserLoggedData] = React.useState("")

  return (
    <div className="App">
      <Scroll />
      <NavBar isUserLoggedIn={isUserLoggedIn}/>
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route path="depot" element={< Deposit />} />
        <Route path="chat" element={< Chat />} />
        <Route path="login" element={< Login isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} userLoggedData={userLoggedData} setUserLoggedData={setUserLoggedData}/>} />
      </Routes>
        <Footer />
    </div>
  )
}


export default App;
