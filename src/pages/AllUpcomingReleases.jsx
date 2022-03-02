import React, { useEffect, useContext } from 'react';
import NavBarReleases from '../components/NavBarReleases';
import TableReleases from '../components/TableReleases';
import InfoContext from '../context/infoContext';

const AllUpcomingReleases = () => {
  const { 
    requestUpComingReleases,
    infoUpComingReleases,
   } = useContext(InfoContext);

  useEffect(() => {
    const upComingReleases = async () => await requestUpComingReleases();
    upComingReleases();
  }, [])

  return (
    <div className="releases-container">
      <NavBarReleases />
      <h2>Lançamentos futuros</h2>
      <TableReleases infoReleases={ infoUpComingReleases }/>
    </div>
  )
}

export default AllUpcomingReleases;