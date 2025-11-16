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
import Oficinas from './sections/Oficinas';
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
               <Hero id="hero"/>

              <TopInfoBar />

              <section id="sobre">
                <AboutEvent />
              </section>

              <section id="programacao">
                <Program />
              </section>

              <section id="escolas">
                <Escolas />
              </section>

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
        <Route
          path="/oficinas"
          element={
            <>
              <Header />
              <Oficinas />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;