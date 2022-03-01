import React from 'react';
import { Link } from 'react-router-dom';


function NavBar() {

  return (
    <div className="navbar-container">
         NavBar
         <Link to="/"> Inicio </Link>
         <Link to="/releases"> Lançamentos </Link>
    </div>
  );
}

export default NavBar;
