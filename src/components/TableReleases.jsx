import React from 'react';
import PropTypes from 'prop-types';

const TableReleases = ({ infoRealeses }) => {
  const columns = [ "Nome", "Numero do voo" , "Data/Hora de lançamento", "Foguete" ]
  
  console.log(infoRealeses)

  if(!infoRealeses) return <p>Carrengando...</p>

  if( typeof(infoRealeses) === 'object') {
    <div className="table-releases-container">
      string
    </div>
  }

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
        {/* {
          infoRealeses.map((obj) => (
            <tr>
              <td>{obj.name}</td>
            </tr>
          ))
        } */}
        <tr>
          <td>x</td>
          <td>x</td>
        </tr>
      </tbody>
     </table>
    </div>
  )
}

TableReleases.prototype = {
  infoRealeses: PropTypes.array,
}

export default TableReleases;