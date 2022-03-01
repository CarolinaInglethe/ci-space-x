import React from 'react';
import { Link } from 'react-router-dom';

const NavBarReleases = () => {

  return (
    <div className="navbar-releases-container">
      <Link to="/release/next">Próximo Lançamento</Link>
      <Link to="/release/latest">Último lançamento</Link>
      <Link to="/releases/upcoming">Próximos lançamentos</Link>
      <Link to="/releases/past">Lançamentos passados</Link>
    </div>
  )
}

export default NavBarReleases;