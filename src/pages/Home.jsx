import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Home() {

  return (
    <div className="home-container">
     <NavBar />
     <section className="home-section">
        <h1>Seja Bem vindo(a) ao Space-X</h1>
        <p>Veja os lançamentos e suas informações</p>
        <button type="button"> <Link to="/releases"> Veja aqui </Link> </button>
     </section>
    </div>
  );
}

export default Home;
