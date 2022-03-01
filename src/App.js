import './css/App.css';
import InfoProvider from './context/infoProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Realeses from './pages/Releases';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import NextRelease from './pages/NextRelease';
import LatestRelease from './pages/LatestRelease';
import AllUpcomingReleases from './pages/AllUpcomingReleases';
import AllPastReleases from './pages/AllPastReleases';

function App() {

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <InfoProvider>
          <NavBar />

          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/releases" element={ <Realeses />} />
            <Route path="/release/next" element={ <NextRelease /> } />
            <Route path="/release/latest" element={ <LatestRelease />  } />
            <Route path="/releases/upcoming" element={ <AllUpcomingReleases /> } />
            <Route path="/releases/past" element={ <AllPastReleases /> } />
          </Routes>

        </InfoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
