import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './App.css';

import Customer from './Customer';

class App extends Component {
  render () {
    const { classes } = this.props;
    return (
        <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
              Sitigrid consumption
            </Typography>
          </Toolbar>
        </AppBar>
        <Customer/>
        </div>
    );
  }
}

export default App;
