import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Countdown from './components/Countdown';
import TopInfoBar from './components/TopInfoBar';
import AboutEvent from './sections/AboutEvent';
import Members from './sections/Members';


function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Countdown/>
    <TopInfoBar/>
    <AboutEvent/>
    <Members/>
    </>
  );
}

export default App
