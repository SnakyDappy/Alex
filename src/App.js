import React from 'react';
import './App.css';
import Header from './components/Header';
import Poza from './components/Poza.js';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import About from './components/About';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Poza />
      <Slider />
      <About />
      <ReviewsSection />
      <Footer />
    </div>
  );
}

export default App;
