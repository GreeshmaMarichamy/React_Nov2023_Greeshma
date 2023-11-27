import './App.css';
import React from 'react';
import LoginPage from './components/LoginPage';
//import Registration from './components/Registration';
import Reg from './components/Reg';
import Homepage from './components/Homepage';
import Games from './components/Games';
import Puzzle from './components/Puzzle';
import Starwars from './components/Starwars';
import Unique from './components/Unique';
import Picture from './components/Picture';
import Active from './components/Active';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Set the default route to the Login page */}
          <Route path="/" element={<LoginPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<Reg/>} />
          <Route path="/m" element={< Homepage/>} />
          <Route path="/g" element={< Games/>} />
          <Route path="/p" element={< Puzzle/>} />
          <Route path="/s" element={< Starwars/>} />
          <Route path="/un" element={< Unique/>} />
          <Route path="/pic" element={< Picture/>} />
          <Route path="/act" element={< Active/>} />
          <Route path="/cart" element={< Cart/>} />
          <Route path="/abt" element={< About/>} />
          <Route path="/con" element={< Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;