import React, { useContext, useEffect } from 'react';
import InfoContext from '../context/infoContext';
import NavBarReleases from '../components/NavBarReleases';
import TableReleases from '../components/TableReleases';

const Releasers = () => {
  const { 
    requestAllReleases,
    infoAllReleases,
   } = useContext(InfoContext);

  useEffect(() => {
    const allReleases = async () => await requestAllReleases();
    allReleases();
  }, [])

  return (
    <div className="releases-container">
       <NavBarReleases />
       <h2>Todos Lançamentos</h2>
       <TableReleases infoReleases={ infoAllReleases }/>
    </div>
  )
}

export default Releasers;