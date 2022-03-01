import React from 'react';
import { Link } from 'react-router-dom';
import logoRocket from '../images/foguete-cinza.png'


function NavBar() {

  return (
    <div className="navbar-container">
        <span>
         <img src={logoRocket} alt="logo de foguete" width="70px"/>
        </span>
         <Link to="/"> Inicio </Link>
         <Link to="/releases"> Lançamentos </Link>
    </div>
  );
}

export default NavBar;
