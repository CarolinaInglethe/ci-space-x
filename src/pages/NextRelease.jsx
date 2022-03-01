import React from 'react';
import NavBarReleases from '../components/NavBarReleases';
import TableReleases from '../components/TableReleases';

const NextRelease = () => {
  return (
    <div>
      <NavBarReleases />
      <h2>Próximo Lançamento</h2>
      <TableReleases />
    </div>
  )
}

export default NextRelease;