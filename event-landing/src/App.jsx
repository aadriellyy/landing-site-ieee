import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Countdown from './components/Countdown';
import TopInfoBar from './components/TopInfoBar';
import AboutEvent from './sections/AboutEvent';
import Members from './sections/Members';
import Program from './sections/Program';
import Escolas from './sections/Escolas'
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Countdown />
              <TopInfoBar />
              <AboutEvent />
              <Program />
              <Escolas />
              <Footer />
            </>
          }
        />
        <Route
          path="/membros"
          element={
            <>
              <Header />
              <Members />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;