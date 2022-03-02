import React from 'react';
import PropTypes from 'prop-types';

const TableReleases = ({ infoRealeses }) => {
  const columns = [ "Nome", "Numero do voo" , "Data/Hora de lançamento", " Id Foguete" ]
  
  console.log(infoRealeses)

  if(!infoRealeses) return <p>Carrengando...</p>

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
          infoRealeses.name ?  
          <tr>
            <td>{infoRealeses.name}</td>
            <td>{infoRealeses.flight_number}</td>
            <td>{Date(infoRealeses.date_utc)}</td>
            <td>{infoRealeses.rocket}</td>
          </tr> 
        :
          infoRealeses.map((obj, index) => (
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