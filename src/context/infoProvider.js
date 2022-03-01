import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import InfoContext from './infoContext';

function InfoProvider({ children }) {
  const [ infoAllReleases, setInfoAllReleases ] = useState([]);
  const [ infoNextRelease, setInfoNextRelease ] = useState({});
  const [ infoLatestRelease, setInfoLatestRelease ] = useState({});
  const [ infoUpComingReleases, setInfoUpComingReleases ] = useState([]);
  const [ infoPastReleases, setInfoPastReleases ] = useState([]);

  const requestAllReleases = async () => {
    const getRealeases = await axios
      .get('https://api.spacexdata.com/v5/launches')
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!getRealeases) return 'Falha na requisiçao launches';
    return getRealeases;
  };

  const requestNextRelease = async () => {
    const getNextRelease = await axios
      .get('https://api.spacexdata.com/v5/launches/next')
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!getNextRelease) return 'Falha na requisiçao launches next';
    return getNextRelease;
  }

  const requestLatestRelease = async () => {
    const getLatestRelease = await axios
      .get('https://api.spacexdata.com/v5/launches/latest')
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!getLatestRelease) return 'Falha na requisiçao launches latest';
    return getLatestRelease;
  }

  const requestUpComingReleases = async () => {
    const getUpComingReleases = await axios
      .get('https://api.spacexdata.com/v5/launches/upcoming')
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!getUpComingReleases) return 'Falha na requisiçao launches upcoming';
    return getUpComingReleases;
  }

  const requestPastReleases = async () => {
    const getPastReleases = await axios
      .get('https://api.spacexdata.com/v5/launches/past')
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!getPastReleases) return 'Falha na requisiçao launches past';
    return getPastReleases;
  }

  const contextValues = {
    requestAllReleases,
    requestNextRelease,
    requestLatestRelease,
    requestUpComingReleases,
    requestPastReleases,
    infoAllReleases,
    setInfoAllReleases,
    infoNextRelease,
    setInfoNextRelease,
    infoLatestRelease,
    setInfoLatestRelease,
    infoUpComingReleases,
    setInfoUpComingReleases,
    infoPastReleases,
    setInfoPastReleases
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