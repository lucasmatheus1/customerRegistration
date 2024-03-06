import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Drawer, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

// Componentes para as páginas
const Home = () => <Typography variant="h3">Home</Typography>;
const Dashboard = () => <Typography variant="h3">Dashboard</Typography>;

// Componente do aplicativo
const App = () => {
  // Estado para controlar se a sidebar está aberta ou fechada
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Função para alternar a visibilidade da sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Lógica de logout
  const handleLogout = () => {
    // Implemente sua lógica de logout aqui
    console.log("Você saiu!");
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" onClick={toggleSidebar} edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Meu Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout} component={Link} to="/logout">Sair</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
        </List>
      </Drawer>
      <Container style={{ marginTop: '20px' }}>
        <Grid container spacing={3}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/logout" element={<Typography variant="h3">Você saiu!</Typography>} />
          </Routes>
        </Grid>
      </Container>
    </Router>
  );
};

export default App;
