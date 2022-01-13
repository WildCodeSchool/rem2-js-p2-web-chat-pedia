import React from "react";
import './App.css';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  
  return (
    <div className="App">
      <ScrollToTop showBelow={250}/>
      <h1>Welcome web-chat-pedia!</h1>
      <div className="container">
        <div className="box box--1"></div>
        <div className="box box--2"></div>
        <div className="box box--3"></div>
        <div className="box box--4"></div>
        <div className="box box--5"></div>
      </div>

    </div>
  );
}

export default App;
