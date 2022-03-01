import React from 'react';
import NavBarReleases from '../components/NavBarReleases';
import TableReleases from '../components/TableReleases';

const AllPastReleases = () => {
  return (
    <div className="releases-container">
      <NavBarReleases />
      <h2>Lançamentos Passados</h2>
      <TableReleases />
    </div>
  )
}

export default AllPastReleases;