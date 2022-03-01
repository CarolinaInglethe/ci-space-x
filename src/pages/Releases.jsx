import React, { useContext, useEffect } from 'react';
import InfoContext from '../context/infoContext';
import NavBarReleases from '../components/NavBarReleases';
import TableReleases from '../components/TableReleases';

const Releasers = () => {
  const { 
    requestAllReleases,
    requestNextRelease,
    requestLatestRelease,
    requestUpComingReleases,
    requestPastReleases,
   } = useContext(InfoContext);

  useEffect(() => {
    const allReleases = async () => await requestAllReleases();
    allReleases();
    const nextRelease = async () => await requestNextRelease();
    nextRelease();
    const latestRelease = async () => await requestLatestRelease();
    latestRelease();
    const upcomingRelease = async () => await requestUpComingReleases();
    upcomingRelease();
    const pastReleases = async () => await requestPastReleases();
    pastReleases();
  }, [])

  return (
    <div className="releases-container">
       <NavBarReleases />
       <h2>Todos Lançamentos</h2>
       <TableReleases />
    </div>
  )
}

export default Releasers;