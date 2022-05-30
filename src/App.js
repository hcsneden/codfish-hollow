import './App.css';
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import UpcomingShows from './components/UpcomingShows'
import { Route, Routes, HashRouter } from 'react-router-dom';
import About from './components/About'
import FAQ from './components/FAQ'
import Businesses from './components/Businesses';
import Footer from './components/Footer';
import React from 'react';

function App() {

  return (
    <div className="App">
      <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<><Header/><HeroImage/><UpcomingShows/><Businesses/><Footer/></>}>
          </Route>
          <Route path="/shows" element={<><Header/><UpcomingShows/></>}>
          </Route>
          <Route path="/about" element={<><Header/><About/></>}>
          </Route>
          <Route path="/codfish-hollow/faq" element={<><Header/><FAQ/></>}>
          </Route>
        </Routes>
      </HashRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
