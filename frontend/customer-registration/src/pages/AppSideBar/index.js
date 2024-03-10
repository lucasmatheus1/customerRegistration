import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Toolbar, Drawer, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#101535', 
    color: '#FFFFFF',
  },
}));

function AppSidebar() {
  const classes = useStyles();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Toolbar className={classes.root}>
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
