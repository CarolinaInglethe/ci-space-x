import React from 'react';
import PropTypes from 'prop-types';

const TableReleases = ({ infoReleases, infoRelease }) => {
  const columns = [ "Nome", "Numero do voo" , "Data/Hora de lançamento", " Id Foguete" ]
  
  console.log(infoReleases, infoRelease)

  if(!infoReleases && !infoRelease) return <p>Carrengando...</p>

  return (
    <div className="table-releases-container">
     <p>Tabela de informações:</p>

     <table>
     <thead>
        <tr>
          {
            columns.map((colum, index) => (
              <th key={index} >{colum}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          infoRelease ?  
          // <p style={ { width:"500px" } }>Em manutenção...</p>
          <tr>
            <td>{infoRelease.name}</td>
            <td>{infoRelease.flight_number}</td>
            <td>{Date(infoRelease.date_utc)}</td>
            <td>{infoRelease.rocket}</td>
          </tr> 
        :
          infoReleases.map((obj, index) => (
          <tr key={index}>
            <td>{obj.name}</td>
            <td>{obj.flight_number}</td>
            <td>{Date(obj.date_utc)}</td>
            <td>{obj.rocket}</td>
          </tr>
          ))
        }
        
      </tbody>
     </table>
    </div>
  )
}

TableReleases.propTypes = {
  infoRealeses: PropTypes.object,
}

export default TableReleases;