import React, { useContext, useEffect } from 'react';
import NavBar from '../components/NavBar';
import InfoContext from '../context/infoContext';
import TableReleases from '../components/TableReleases';

const Releasers = () => {
  const { requestReleasers, setInfoReleasers, infoReleasers } = useContext(InfoContext);

  useEffect(() => {
    const response = async () => await requestReleasers()
    setInfoReleasers(response())
    console.log(infoReleasers)
  }, [])

  return (
    <div className="releases-container">
      <NavBar />

      <section className="releases-section">
        <h1>Lançamentos</h1>

        <TableReleases />
      </section>

    </div>
  )
}

export default Releasers;