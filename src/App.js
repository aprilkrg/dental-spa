import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Header from './components/partials/Header';

class App extends Component {
  render() {
    let services = [
      "Deep Cleaning",
      "Filling",
      "Gum Massage",
      "Root Canal",
      "Oral Mud Bath"
    ]
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services services={services} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App