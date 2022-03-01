import React, { useEffect, useContext } from 'react';
import NavBarReleases from '../components/NavBarReleases';
import TableReleases from '../components/TableReleases';
import InfoContext from '../context/infoContext';

const NextRelease = () => {

  const { 
    requestNextRelease,
    infoNextRelease,
   } = useContext(InfoContext);

  useEffect(() => {
    const nextRelease = async () => await requestNextRelease();
    nextRelease();
  }, [])

  return (
    <div className="releases-container">
      <NavBarReleases />
      <h2>Próximo Lançamento</h2>
      <TableReleases infoRealeses={ infoNextRelease }/>
    </div>
  )
}

export default NextRelease;