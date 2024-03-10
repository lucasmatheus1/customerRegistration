import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    padding: 20,
    width: '100%'
  },
  highlighted: {
    backgroundColor: '#fff3e0',
    padding: theme.spacing(2),
    borderRadius: 5,
  },
  name: {
    '& .Mui-disabled': {
      backgroundColor: '#eeeeee',
      color: '#000000'
    },
  }
}));

const PartnerSuppliers = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography style={{margin: '10px'}}variant="h6">Fornecedores Parceiros</Typography>
        <div className={classes.highlighted}>
          <Typography variant="h6">Área</Typography>
          <Typography variant="body1" color="textSecondary">Finanças</Typography>
        </div>
        <div className={classes.highlighted} style={{margin: '5px'}}>
          <Typography variant="h6">Descrição da Atividade</Typography>
          <Typography variant="body1" color="textSecondary">Atua na área de finanças</Typography>
        </div>
        <TextField
          label="Nome da Empresa"
          variant="outlined"
          fullWidth
          disabled
          value="Mathetes"
          style={{marginTop: '10px'}}
          className={classes.name}
        />
        <Typography variant="h6" style={{marginTop: '20px'}}>Lista de Empresas Atendidas</Typography>
        <ul>
          <li>Agulhas Negras</li>
          {/* Adicione quantas empresas fictícias desejar */}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PartnerSuppliers;
