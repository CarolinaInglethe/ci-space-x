import React from 'react';
import { Link } from 'react-router-dom';
import logoRocket from '../images/foguete-azul.png'
import logoHome from '../images/casa-cinza.png'
import logoRocketGrey from '../images/foguete-cinza.png'


function NavBar() {

  return (
    <div className="navbar-container">
         <img src={logoRocket} alt="logo de foguete" width="100x"/>
        
        <span>
        <img src={logoHome} alt="logo de foguete" width="25px"/>
          <Link to="/"> Inicio </Link>
        </span>
         
         <span>
           <img src={logoRocketGrey} alt="logo de foguete" width="25px"/>
           <Link to="/releases"> Lançamentos </Link>
         </span>
    </div>
  );
}

export default NavBar;
