import React, { useContext, useEffect } from 'react';
import InfoContext from '../context/infoContext';
import NavBarReleases from '../components/NavBarReleases';

const Releasers = () => {
  const { requestAllReleases, setinfoAllReleases } = useContext(InfoContext);

  useEffect(() => {
    const response = async () => await requestAllReleases()
    setinfoAllReleases(response())
  }, [])

  return (
    <div className="releases-container">
       <NavBarReleases />
    </div>
  )
}

export default Releasers;