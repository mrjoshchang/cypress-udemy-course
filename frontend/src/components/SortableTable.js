import React, { useState } from 'react';
import classes from './SortableTable.module.css';

const SortableTable = ({ data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortOrder, setSortOrder] = useState('asc'); // Initial sorting order

  const handleSort = (column) => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';

    const sorted = [...sortedData].sort((a, b) => {
      if (newOrder === 'asc') {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return b[column] > a[column] ? 1 : -1;
      }
    });

    setSortedData(sorted);
    setSortOrder(newOrder);
  };

  return (
    <div className={classes['table-container']}>
      <table data-cy="user" className={classes['styled-table']}>
        {/* ... Table header */}
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>ID</th>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('age')}>Age</th>
          </tr>
        </thead>
        {/* ... Table body */}
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;
