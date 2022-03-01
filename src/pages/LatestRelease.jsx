import React, { useEffect, useContext } from 'react';
import NavBarReleases from '../components/NavBarReleases';
import TableReleases from '../components/TableReleases';
import InfoContext from '../context/infoContext';

const LatestRelease = () => {
  const { 
    requestLatestRelease,
    infoLatestRelease,
   } = useContext(InfoContext);

  useEffect(() => {
    const latestRelease = async () => await requestLatestRelease();
    latestRelease();
  }, [])

  return (
    <div className="releases-container">
      <NavBarReleases />
      <h2>Último Lançamento</h2>
      <TableReleases infoRealeses={ infoLatestRelease }/>
    </div>
  )
}

export default LatestRelease;