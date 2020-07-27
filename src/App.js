import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Navbar from './components/Navbar/Navbar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
