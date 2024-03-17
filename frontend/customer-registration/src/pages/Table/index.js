import React, { useState, useMemo } from 'react';
import jsonData from './data';

const Table = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [searchText, setSearchText] = useState({});
  const [data, setData] = useState(jsonData);
  const [columnTotals, setColumnTotals] = useState({});

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key) {
      direction = sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
    }
    setSortConfig({ key, direction });
  };

  const filteredResults = () => {
    let filtered = [...data];
    Object.keys(searchText).forEach(key => {
      if (searchText[key] === '') {
        return;
      }
      filtered = filtered.filter(item =>
        item[key].toString().toLowerCase().includes(searchText[key].toLowerCase())
      );
    });
    return filtered;
  };

  const handleSearch = (e, key) => {
    setSearchText({ ...searchText, [key]: e.target.value });
  };

  const calculateColumnTotals = (filteredData) => {
    const totals = {};
    filteredData.forEach(item => {
      Object.keys(item).forEach(key => {
        if (typeof item[key] === 'number') {
          totals[key] = (totals[key] || 0) + item[key];
        }
      });
    });
    return totals;
  };

  const sortedAndFilteredData = useMemo(() => {
    const filteredData = filteredResults();
    const sortableData = [...filteredData];
    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    const totals = calculateColumnTotals(filteredData);
    setColumnTotals(totals);
    return sortableData;
  }, [data, sortConfig, searchText]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key, index) => (
              <th key={index}>
                <div onClick={() => handleSort(key)}>
                  {!(index > 0) ? '' : key.toUpperCase()}
                  {sortConfig.key === key && sortConfig.direction === 'ascending' && '↑'}
                  {sortConfig.key === key && sortConfig.direction === 'descending' && '↓'}
                </div>
                {!(index > 0) ?
                  <div></div> :
                  <input
                    type="text"
                    id={key}
                    name={key}
                    placeholder={`Filtrar por ${key.toLowerCase()}`}
                    value={searchText[key] || ''}
                    onChange={(e) => handleSearch(e, key)}
                  />
                }
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedAndFilteredData.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div>
        <strong>Totais:</strong>
        {Object.keys(columnTotals).map((key, index) => (
          <div key={index}>{`${key}: ${columnTotals[key]}`}</div>
        ))}
      </div> */}
    </div>
  );
};

export default Table;
