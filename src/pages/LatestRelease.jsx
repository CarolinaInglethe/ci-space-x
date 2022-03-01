import React from 'react';
import NavBarReleases from '../components/NavBarReleases';
import TableReleases from '../components/TableReleases';

const LatestRelease = () => {
  return (
    <div>
      <NavBarReleases />
      <h2>Último Lançamento</h2>
      <TableReleases />
    </div>
  )
}

export default LatestRelease;