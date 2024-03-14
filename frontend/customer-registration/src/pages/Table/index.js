import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  TextField,
  Paper,
  Select,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles({
  tableContainer: {
    width: '1000px',
    minWidth: '1000px',
    overflowX: 'auto',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    background: '#fff',
  },
});

const DataTable = () => {
  const classes = useStyles();
  const [filter, setFilter] = useState({});
  const [totals, setTotals] = useState({});

  const data = [
    { id: 1, name: 'João', position: 'Desenvolvedor', department: 'TI', salary: 5000 },
    { id: 2, name: 'Maria', position: 'Designer', department: 'Design', salary: 4500 },
    { id: 3, name: 'Pedro', position: 'Analista de Dados', department: 'TI', salary: 6000 },
    { id: 4, name: 'Ana', position: 'Gerente de Projeto', department: 'TI', salary: 7000 },
    { id: 5, name: 'Carlos', position: 'Analista de Marketing', department: 'Marketing', salary: 5500 },
  ];

  const handleFilterChange = (columnName, value) => {
    setFilter({ ...filter, [columnName]: value });
  };

  const calculateTotals = (columnName) => {
    let total = 0;
    for (const row of data) {
      total += row[columnName];
    }
    return total;
  };

  const filteredData = data.filter(item => {
    for (let key in filter) {
      if (item[key].toString().toLowerCase().indexOf(filter[key].toString().toLowerCase()) === -1) {
        return false;
      }
    }
    return true;
  });

  const handleSelectChange = (event, columnName) => {
    const value = event.target.value;
    setFilter({ ...filter, [columnName]: value });
    const total = calculateTotals(columnName);
    setTotals({ ...totals, [columnName]: total });
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Select
                value={filter.id || ''}
                onChange={(e) => handleSelectChange(e, 'id')}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <Select
                value={filter.name || ''}
                onChange={(e) => handleSelectChange(e, 'name')}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="João">João</MenuItem>
                <MenuItem value="Maria">Maria</MenuItem>
                <MenuItem value="Pedro">Pedro</MenuItem>
                <MenuItem value="Ana">Ana</MenuItem>
                <MenuItem value="Carlos">Carlos</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <Select
                value={filter.position || ''}
                onChange={(e) => handleSelectChange(e, 'position')}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="Desenvolvedor">Desenvolvedor</MenuItem>
                <MenuItem value="Designer">Designer</MenuItem>
                <MenuItem value="Analista de Dados">Analista de Dados</MenuItem>
                <MenuItem value="Gerente de Projeto">Gerente de Projeto</MenuItem>
                <MenuItem value="Analista de Marketing">Analista de Marketing</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <Select
                value={filter.department || ''}
                onChange={(e) => handleSelectChange(e, 'department')}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="TI">TI</MenuItem>
                <MenuItem value="Design">Design</MenuItem>
                <MenuItem value="Marketing">Marketing</MenuItem>
              </Select>
            </TableCell>
            <TableCell>
              <Select
                value={filter.salary || ''}
                onChange={(e) => handleSelectChange(e, 'salary')}
              >
                <MenuItem value="">Todos</MenuItem>
                <MenuItem value="5000">5000</MenuItem>
                <MenuItem value="4500">4500</MenuItem>
                <MenuItem value="6000">6000</MenuItem>
                <MenuItem value="7000">7000</MenuItem>
                <MenuItem value="5500">5500</MenuItem>
              </Select>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.position}</TableCell>
              <TableCell>{row.department}</TableCell>
              <TableCell>{row.salary}</TableCell>
            </TableRow>
          ))}
          {/* <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              {Object.keys(totals).map((columnName, index) => (
                <div key={index}>{columnName}: {totals[columnName]}</div>
              ))}
            </TableCell>
          </TableRow> */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
