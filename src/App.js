import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Menu, MenuItem, Box } from '@material-ui/core';
import { MemoryRouter as Router, Switch, Route, Link } from "react-router-dom";
import Consumption from './Consumption';
import Generation from './Generation';
import { apiURL } from './api.js';
import './App.css';

import Customer from './Customer';

export default function App(props) {
  const[anchorEl, setAnchorEl] = useState(null);
  const[customerName, setCustomerName] = useState("");

  useEffect(() => 
  {
    async function fetchData() {
      const res = await fetch(apiURL+"/customers/");
      res
        .json()
        .then(res => setCustomerName(res[0].Record.customerName))
    };

    fetchData();
  });

  const handleMenu = event => {
    setAnchorEl( event.currentTarget );
  };

  const handleClose = () => {
    setAnchorEl( null );
  };

  return (
      <React.Fragment>
        <Router>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start"  color="inherit" aria-label="menu">
                <MenuIcon onClick={handleMenu}/>
              </IconButton>
              <Menu
                id="main-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} component={Link} to='/'>Home</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to='/consumption'>Consumption</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to='/generation'>Generation</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to='/blockchain'>Blockchain</MenuItem>
              </Menu>
              <Typography variant="h6" >
                Sitigrid Demo
              </Typography>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route path="/consumption">
              <Customer customerName={customerName}/>
              <Box m={4}>
                <Typography>
                  Consumption records:
                </Typography>
                <Consumption/>
              </Box>]
            </Route>
            <Route path="/generation">
              <Customer  customerName={customerName}/>
              <Box m={4}>
                <Typography>
                  Generation records:
                </Typography>
                <Generation/>
              </Box>]
            </Route>
            <Route path="/blockchain">
              <Box m={4}>
                <Typography>
                  Blockchain: (TBD)
                </Typography>
              </Box>]
            </Route>
            <Route path="/">
              <Box m={4}>
                <Typography>
                  Welcome to Sitigrid!
                </Typography>
                <Typography>
                  Energy Sharing for a carbon Neutral Network
                </Typography>                
              </Box>
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
  );
}
