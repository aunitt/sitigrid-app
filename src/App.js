import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Menu, MenuItem, Box } from '@material-ui/core';
import { MemoryRouter as Router, Switch, Route, Link } from "react-router-dom";
import Consumption from './Consumption';
import Generation from './Generation';
import './App.css';

import Customer from './Customer';

class App extends Component {
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render () {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
        <React.Fragment>
          <Router>
            <AppBar position="static">
              <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu">
                  <MenuIcon onClick={this.handleMenu}/>
                </IconButton>
                <Menu
                  id="main-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose} component={Link} to='/'>Home</MenuItem>
                  <MenuItem onClick={this.handleClose} component={Link} to='/consumption'>Consumption</MenuItem>
                  <MenuItem onClick={this.handleClose} component={Link} to='/generation'>Generation</MenuItem>
                  <MenuItem onClick={this.handleClose} component={Link} to='/blockchain'>Blockchain</MenuItem>
                </Menu>
                <Typography variant="h6" >
                  Sitigrid Demo
                </Typography>
              </Toolbar>
            </AppBar>
            <Customer/>
            <Switch>
              <Route path="/consumption">
                <Box m={4}>
                  <Typography>
                    Consumption records:
                  </Typography>
                  <Consumption/>
                </Box>]
              </Route>
              <Route path="/generation">
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
                </Box>]
              </Route>
            </Switch>
          </Router>
        </React.Fragment>
    );
  }
}

export default App;
