import React from 'react';

export const Table = props => {
  let tableHead = ['User name', 'Surname', 'Age'];
  return (
    <div className='table-wrapper'>
      <table className='table'>
        <thead>
          <tr>
            {tableHead.map(td => (
              <td>{td}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
