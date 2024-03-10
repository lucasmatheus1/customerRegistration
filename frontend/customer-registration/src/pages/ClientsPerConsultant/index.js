import React, { useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import Chart from 'chart.js/auto';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  chartContainer: {
    height: 300,
  },
  centerText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
}));

const data = {
  labels: ['SP', 'RJ', 'MG', 'BA', 'RS'],
  datasets: [{
    label: 'Clientes',
    data: [46000000, 17200000, 21100000, 14900000, 11400000],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
    ],
    borderWidth: 1,
  }],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const ClientsPerConsultant = () => {
  const classes = useStyles();
  const chartRef = useRef(null);

  useEffect(() => {
    let myChart = null;

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      myChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options,
      });
    }

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" gutterBottom>Clientes que Artur trabalha</Typography>
              <div className={classes.chartContainer}>
                <canvas ref={chartRef} />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent className={classes.centerText}>
              <Typography variant="h5">Valor Médio de Consultoria</Typography>
              <Typography variant="h4" component="p">R$ 200,00</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" gutterBottom>Fornecedores</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="BPO" secondary="R$ 500,00" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="BPO acumulado" secondary="R$ 800,00" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Marketing" secondary="R$ 600,00" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" gutterBottom>Empresas que trabalha</Typography>
              <List>
                <ListItem button component="a" href="#">
                  <ListItemText primary="Agulhas Negras - RJ" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default ClientsPerConsultant;
