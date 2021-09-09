import React, { useEffect } from 'react';
import './App.css';
// import Homepage from './pages/Homepage/Homepage';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import LoadingScreen from './components/LoadingScreen/LoadingScreen';

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    window.location.href = "https://oshioke.vercel.app";
  }, []);
  return (
    <div className="App">
        {/* <Homepage/> */}
    </div>
  );
}

export default App;
