import './App.css';
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import UpcomingShows from './components/UpcomingShows';
import Shows from './components/Shows'
import { Route, Routes, HashRouter } from 'react-router-dom';
import About from './components/About'
import FAQ from './components/FAQ'
import Businesses from './components/Businesses';
import Footer from './components/Footer'
import Concessionsfaq from './components/Concessionsfaq'
import Testimonials from './components/Testimonials'
import History from './components/History'
import React from 'react';

function App() {

  return (
    <div className="App">
      <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<><Header/><HeroImage/><UpcomingShows/><Businesses/><Footer/></>}>
          </Route>
          <Route path="/shows" element={<><Header/><Shows/><Footer/></>}>
          </Route>
          <Route path="/about" element={<><Header/><About/><Footer/></>}>
          </Route>
          <Route path="/faq" element={<><Header/><FAQ/></>}>
          </Route>
          <Route path="/testimonials" element={<><Header/><Testimonials/></>}>
          </Route>
          <Route path="/history" element={<><Header/><History/></>}>
          </Route>
        </Routes>
      </HashRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
