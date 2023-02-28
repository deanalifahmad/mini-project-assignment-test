import React from 'react';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}>
            
          </Route>
          <Route path="/about" element={<About />}>
            
          </Route>
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
