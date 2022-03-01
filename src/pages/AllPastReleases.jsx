import React, { useContext } from 'react';
import NavBarReleases from '../components/NavBarReleases';
import TableReleases from '../components/TableReleases';
import InfoContext from '../context/infoContext';


const AllPastReleases = () => {
  const { infoPastReleases } = useContext(InfoContext)

  return (
    <div className="releases-container">
      <NavBarReleases />
      <h2>Lançamentos Passados</h2>
      <TableReleases infoRealeses={infoPastReleases}/>
    </div>
  )
}

export default AllPastReleases;