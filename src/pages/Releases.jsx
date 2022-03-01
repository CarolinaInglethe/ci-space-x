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
       <NavBarReleases />
    </div>
  )
}

export default Releasers;