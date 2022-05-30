import './App.css';
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import UpcomingShows from './components/UpcomingShows'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About'
import FAQ from './components/FAQ'
import Businesses from './components/Businesses';
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/codfish-hollow" element={<><Header/><HeroImage/><UpcomingShows/><Businesses/><Footer/></>}>
          </Route>
          <Route path="/codfish-hollow/shows" element={<><Header/><UpcomingShows/></>}>
          </Route>
          <Route path="/codfish-hollow/about" element={<><Header/><About/></>}>
          </Route>
          <Route path="/codfish-hollow/faq" element={<><Header/><FAQ/></>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
