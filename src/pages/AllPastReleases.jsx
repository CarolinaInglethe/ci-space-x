import React, { useContext, useEffect } from 'react';
import NavBarReleases from '../components/NavBarReleases';
import TableReleases from '../components/TableReleases';
import InfoContext from '../context/infoContext';


const AllPastReleases = () => {
  const { requestPastReleases, infoPastReleases } = useContext(InfoContext)


  useEffect(() => {
    const pastRelease = async () => await requestPastReleases();
    pastRelease();
  }, [])

  return (
    <div className="releases-container">
      <NavBarReleases />
      <h2>Lançamentos Passados</h2>
      <TableReleases infoReleases={infoPastReleases}/>
    </div>
  )
}

export default AllPastReleases;