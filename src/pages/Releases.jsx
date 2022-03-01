import React, { useContext, useEffect } from 'react';
import InfoContext from '../context/infoContext';

const Releasers = () => {
  const { requestReleasers, setInfoReleasers, infoReleasers } = useContext(InfoContext);

  useEffect(() => {
    const response = async () => await requestReleasers()
    setInfoReleasers(response())
    console.log(infoReleasers)
  }, [])

  return (
    <h1>
        Releases
    </h1>
  )
}

export default Releasers;