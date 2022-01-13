import { Routes, Route } from 'react-router-dom';

import NavBar from './components/navbar/NavBar'
import Deposit from './pages/Deposit';
import Home from './pages/Home';
import Login from './pages/Login';
import './App.css';

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
    </div>
  );
}

export default App;
