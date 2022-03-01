import React, { useContext, useEffect } from 'react';
import NavBar from '../components/NavBar';
import InfoContext from '../context/infoContext';

const Releasers = () => {
  const { requestReleasers, setInfoReleasers, infoReleasers } = useContext(InfoContext);

  useEffect(() => {
    const response = async () => await requestReleasers()
    setInfoReleasers(response())
    console.log(infoReleasers)
  }, [])

  return (
    <div className="releases-container">
      <NavBar />

      <div>
        Lançamentos 
      </div>

    </div>
  )
}

export default Releasers;