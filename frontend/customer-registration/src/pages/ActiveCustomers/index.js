import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, TextField, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    padding: 20,
  },
  form: {
    '& > *': {
      marginBottom: theme.spacing(2),
    },
    '& .Mui-disabled': {
      backgroundColor: '#eeeeee',
      color: '#000000'
    },
  },
  highlighted: {
    backgroundColor: '#fff3e0',
    padding: theme.spacing(2),
    borderRadius: 5,
  },
}));

const ActiveCustomers = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de envio do formulário aqui
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography style={{margin: '10px'}}variant="h6">Clientes Ativos</Typography>
        <div className={classes.highlighted}>
          <Typography variant="h6">Faturamento Médio</Typography>
          <Typography variant="h4" color="primary">R$ 192.129,66</Typography>
        </div>
        <div className={classes.highlighted} style={{margin: '5px'}}>
          <Typography variant="h6">Última Apuração</Typography>
          <Typography variant="h4" color="primary">R$ 177.213,50</Typography>
        </div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="Consultor"
            variant="outlined"
            fullWidth
            disabled
            value="Cristiano"
          />
          <TextField
            label="Empresa"
            variant="outlined"
            fullWidth
            disabled
            value="Agulhas Negras"
          />
          <TextField
            label="Endereço"
            variant="outlined"
            fullWidth
            disabled
            value="Av. Gal. Afonseca"
          />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Cidade"
                variant="outlined"
                fullWidth
                disabled
                value="Resende"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Bairro"
                variant="outlined"
                fullWidth
                disabled
                value="Manejo"
              />
            </Grid>
          </Grid>
          <TextField
            label="E-mail principal"
            variant="outlined"
            fullWidth
            disabled
            value="Av. Gal. Afonseca"
          />
          <TextField
            label="Internet"
            variant="outlined"
            fullWidth
            disabled
            value="https://www.hvagulhasnegras.com.br"
          />
          <TextField
            label="Data de cadastro"
            variant="outlined"
            fullWidth
            disabled
            value="25/02/2021"
          />
          <TextField
            label="Tempo de contrato"
            variant="outlined"
            fullWidth
            disabled
            value="3 anos e 1 mês"
          />
          <TextField
            label="Software"
            variant="outlined"
            fullWidth
            disabled
            value="Vetus"
          />
        </form>
      </CardContent>
    </Card>
  );
};

export default ActiveCustomers;