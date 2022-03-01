import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import InfoContext from './infoContext';

function InfoProvider({ children }) {

  const requestReleasers = async () => {
    const getRealeases = await axios
      .get('https://api.spacexdata.com/v5/launches')
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!getRealeases) return 'Falha na requisiçao';
    return getRealeases;
  };

  const contextValues = {
    requestReleasers,
  };

  return (
    <InfoContext.Provider value={ contextValues }>
      { children }
    </InfoContext.Provider>
  );
}

export default InfoProvider;

InfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};