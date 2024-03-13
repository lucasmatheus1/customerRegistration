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

  const filteredData = data.filter(item => {
    for (let key in filter) {
      if (item[key].toString().toLowerCase().indexOf(filter[key].toString().toLowerCase()) === -1) {
        return false;
      }
    }
    return true;
  });

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TextField
                label=""
                variant="outlined"
                size="small"
                onChange={e => handleFilterChange('id', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <TextField
                label=""
                variant="outlined"
                size="small"
                onChange={e => handleFilterChange('name', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <TextField
                label=""
                variant="outlined"
                size="small"
                onChange={e => handleFilterChange('position', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <TextField
                label=""
                variant="outlined"
                size="small"
                onChange={e => handleFilterChange('department', e.target.value)}
              />
            </TableCell>
            <TableCell>
              <TextField
                label=""
                variant="outlined"
                size="small"
                onChange={e => handleFilterChange('salary', e.target.value)}
              />
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
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
