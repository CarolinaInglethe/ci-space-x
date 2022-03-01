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
    await axios
      .get('https://api.spacexdata.com/v5/launches')
      .then((res) => setInfoAllReleases(res.data))
      .catch((err) => console.log(err));
  };

  const requestNextRelease = async () => {
    await axios
      .get('https://api.spacexdata.com/v5/launches/next')
      .then((res) => setInfoNextRelease(res.data))
      .catch((err) => console.log(err));
  }

  const requestLatestRelease = async () => {
    await axios
      .get('https://api.spacexdata.com/v5/launches/latest')
      .then((res) => setInfoLatestRelease(res.data))
      .catch((err) => console.log(err));;
  }

  const requestUpComingReleases = async () => {
    await axios
      .get('https://api.spacexdata.com/v5/launches/upcoming')
      .then((res) => setInfoUpComingReleases(res.data))
      .catch((err) => console.log(err));
  }

  const requestPastReleases = async () => {
    await axios
      .get('https://api.spacexdata.com/v5/launches/past')
      .then((res) => setInfoPastReleases(res.data))
      .catch((err) => console.log(err));
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