import React, { useContext, useEffect } from 'react';
import InfoContext from '../context/infoContext';
import NavBarReleases from '../components/NavBarReleases';

const Releasers = () => {
  const { 
    requestAllReleases,
    requestnextRelease,
    requestLatestRelease,
    requestUpComingReleases,
    requestPastReleases,
   } = useContext(InfoContext);

  useEffect(() => {
    const allReleases = async () => await requestAllReleases();
    allReleases();
    const nextRelease = async () => await requestnextRelease();
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
    </div>
  )
}

export default Releasers;