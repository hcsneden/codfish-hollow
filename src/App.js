import './App.css';
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import UpcomingShows from './components/UpcomingShows'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import About from './components/About'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/codfish-hollow" element={<><Header/><HeroImage/><UpcomingShows/></>}>
          </Route>
          <Route path="/codfish-hollow/shows" element={<UpcomingShows/>}>
          </Route>
          {/* <Route path="/codfish-hollow/about" element={<About/>}>
          </Route> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
