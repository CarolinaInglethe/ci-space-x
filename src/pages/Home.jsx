import React from 'react';
import { Link } from 'react-router-dom';
import rocketLogo from '../images/foguete-estrelas.png';

function Home() {

  return (
    <div className="home-container">
     <section className="home-section">
        <h1>Seja Bem vindo(a) ao Space-X</h1>
        <p>Veja os lançamentos e suas informações</p>

        <img src={rocketLogo} alt="logo do foguete" width="300px" />
        <button type="button"> <Link to="/releases"> Veja aqui </Link> </button>
     </section>
    </div>
  );
}

export default Home;
