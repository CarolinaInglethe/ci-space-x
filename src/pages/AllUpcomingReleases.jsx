import React from 'react';
import NavBarReleases from '../components/NavBarReleases';
import TableReleases from '../components/TableReleases';

const AllUpcomingReleases = () => {
  return (
    <div>
      <NavBarReleases />
      <h2>Lançamentos futuros</h2>
      <TableReleases />
    </div>
  )
}

export default AllUpcomingReleases;