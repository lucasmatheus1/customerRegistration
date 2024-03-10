import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, List, ListItem, ListItemText, Grid } from '@material-ui/core';
import Chart from 'chart.js/auto';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    border: '1px solid red',
    width: '100%'
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    padding: 20,
  },
  metricsCard: {
    // Removido o estilo para que as métricas ocupem todo o espaço disponível
  },
  metricsList: {
    listStyle: 'none',
    padding: 0,
  },
  metricsItem: {
    padding: 5,
    borderBottom: '1px solid #ddd',
  },
  chartCard: {
    // Adicionado estilo para definir a largura do gráfico
    width: 300,
    marginLeft: theme.spacing(2), // Adicionado espaçamento à esquerda
  },
  metricsText: {
    fontSize: 16,
    fontWeight: 500,
  },
  chartImage: {
    width: '100%',
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  // Configuração do gráfico (dados de exemplo)
  const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [{
      label: 'Faturamento',
      data: [1000, 2000, 1500, 2500, 1800, 3000], // dados de exemplo
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
    }],
  };

  // Configuração do gráfico (opções de exemplo)
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Ref para o elemento de gráfico
  const chartRef = React.useRef(null);

  // Atualizar o gráfico quando o componente for montado
  React.useEffect(() => {
    let myChart = null;

    if (chartRef && chartRef.current) {
      if (chartRef.current.chart) {
        // Destruir o gráfico anterior, se existir
        chartRef.current.chart.destroy();
      }
      // Criar um novo gráfico
      myChart = new Chart(chartRef.current, {
        type: 'bar', // altere conforme necessário (bar, line, etc.)
        data: data,
        options: options,
      });
    }

    // Retornar uma função de limpeza para destruir o gráfico quando o componente for desmontado
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return (
    <div className={classes.root}>
      {/* Grid container para organizar os elementos */}
      <Grid container spacing={2}>
        {/* Grid item para as métricas */}
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardContent className={classes.metricsCard}>             
              <List className={classes.metricsList}>
                <ListItem className={classes.metricsItem}>
                  <ListItemText primary="Número de clientes ativos: 100" />
                </ListItem>
                <ListItem className={classes.metricsItem}>
                  <ListItemText primary="Número de empresas: 50" />
                </ListItem>
                <ListItem className={classes.metricsItem}>
                  <ListItemText primary="Faturamento mensal: R$ 10.000,00" />
                </ListItem>
                <ListItem className={classes.metricsItem}>
                  <ListItemText primary="Faturamento por hora: R$ 20,00" />
                </ListItem>
                <ListItem className={classes.metricsItem}>
                  <ListItemText primary="Número de fornecedores: 3" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        {/* Grid item para o gráfico */}
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6">Faturamento Mensal por Fornecedor</Typography>
              <canvas ref={chartRef} className={classes.chartImage} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
