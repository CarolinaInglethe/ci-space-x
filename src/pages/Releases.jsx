import React, { useContext, useEffect } from 'react';
import InfoContext from '../context/infoContext';
import NavBarReleases from '../components/NavBarReleases';

const Releasers = () => {
  const { requestReleasers, setInfoReleasers } = useContext(InfoContext);

  useEffect(() => {
    const response = async () => await requestReleasers()
    setInfoReleasers(response())
  }, [])

  return (
    <div className="releases-container">
       <h1>Lançamentos</h1>

       <NavBarReleases />
    </div>
  )
}

export default Releasers;