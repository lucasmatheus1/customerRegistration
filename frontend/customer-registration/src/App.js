import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Typography, Container, Grid } from '@material-ui/core';
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import AppSidebar from './pages/AppSideBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#101535', 
    color: '#FFFFFF', 
    minHeight: '100vh',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <AppSidebar />
        <Container style={{ marginTop: '20px' }}>
          <Grid container spacing={3}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/logout" element={<Typography variant="h3">Você saiu!</Typography>} />
            </Routes>
          </Grid>
        </Container>
      </div>
    </Router>
  );
};

export default App;
