import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom'; // Import only the Link component
import { Toolbar, Drawer, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function AppSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // const handleLogout = () => {
  //   console.log("Você saiu!");
  // };
  return (
    <>
      <Toolbar>
        <IconButton color="inherit" onClick={toggleSidebar} edge="start">
          <MenuIcon />
        </IconButton>
      </Toolbar>
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
    </>
  );
}

export default AppSidebar;
