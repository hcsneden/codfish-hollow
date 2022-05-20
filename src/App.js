import './App.css';
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import UpcomingShows from './components/UpcomingShows'

function App() {

  return (
    <div className="App">
      <Header></Header>
      <HeroImage></HeroImage>
      <UpcomingShows></UpcomingShows>
    </div>
  );
}

export default App;
