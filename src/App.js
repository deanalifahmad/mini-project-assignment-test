import React from 'react';
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import ContactDetails from './views/ContactDetails';
import Movie from './views/Movie';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App relative pb-10 min-h-screen">
      <Router>
        <Header />

        <Routes>
          <Route 
            path="/" 
            element={<Home />}
          >
          </Route>
          <Route 
            path="/about" 
            element={<About />}
          >
          </Route>
          <Route 
            path="/contact" 
            element={<Contact />}
          >
          </Route>
          <Route 
            path="/contact-details" 
            element={<ContactDetails />}
          >
          </Route>
          <Route 
            path="/movie/:id" 
            element={<Movie />}
          >
          </Route>
        </Routes>

        <Footer />
      </Router>

    </div>
  );
}

export default App;
