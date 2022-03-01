import React, { useContext } from 'react';
import InfoContext from '../context/infoContext';

const TableReleases = () => {
  const { infoReleasers } = useContext(InfoContext);

  console.log(infoReleasers)
  return (
    <div className="table-releases-container">
     <h2>Tabela</h2>

     <table>
     <thead>
        <tr>
          <th>l</th>
          <th>k</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>x</td>
          <td>y</td>
        </tr>
      </tbody>
     </table>
    </div>
  )
}

export default TableReleases;