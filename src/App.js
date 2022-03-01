import './css/App.css';
import InfoProvider from './context/infoProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Realeses from './pages/Releases';

function App() {

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <InfoProvider>

          <Routes>
            <Route path="/" element={ <Realeses />} />
          </Routes>

        </InfoProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
