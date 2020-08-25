import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <div className="App">
        <LoadingScreen/>
        <Homepage/>
    </div>
  );
}

export default App;
