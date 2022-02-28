import './css/App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {
  const [infoReleases, setInfoReleases] = useState([])

  const requestReleases = async () => {
    return await axios.get('https://api.spacexdata.com/v5/launches')
    .then((res) => res.data)
  }

  useEffect(() => {
    const responseReleases = async () => await requestReleases()
    setInfoReleases(responseReleases())
  }, [])

  console.log(infoReleases)

  return (
    <div className="App">
      <h1>
        Releases
      </h1>
    </div>
  );
}

export default App;
