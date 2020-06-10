import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Menu, MenuItem, Box } from '@material-ui/core';
import { MemoryRouter as Router, Switch, Route, Link } from "react-router-dom";
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Consumption from './Consumption';
import Generation from './Generation';
import Blockchain from './Blockchain';
import { apiURL } from './api.js';
import './App.css';

import Meter from './Meter';
import CreateData from './CreateData';

const timeInterval = 10000;

export default function App(props) {
  const[anchorEl, setAnchorEl] = useState(null);
  const[meterpoint, setMeterpoint] = useState("");
  const[listItems, setListItems] = useState([]);

  useEffect(() => 
  {
    async function fetchData() {
      const res = await fetch(apiURL+"/meters/");
      res
        .json()
        .then(res => {
            setListItems(res.map((result) => 
               <option key={result.Record.MPAN} value={result.Record.MPAN}>{result.Record.MPAN}</option>
              )
            );
          }
        )
    };

    fetchData();

    const interval = setInterval(() => {
      /* Need to add check for meterpoint here */
      CreateData(meterpoint);
    }, timeInterval);
    return () => clearInterval(interval);
  }, [meterpoint]);

  const handleMenu = event => {
    setAnchorEl( event.currentTarget );
  };

  const handleClose = () => {
    setAnchorEl( null );
  };

  const handleChange = (event) => {
    console.log("Setting meter = " + event.target.value );
    setMeterpoint( event.target.value );
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
              <Meter meterpoint={meterpoint}/>
              <Box m={4}>
                <Typography>
                  Consumption records:
                </Typography>
                <Consumption meterpoint={meterpoint}/>
              </Box>
            </Route>
            <Route path="/generation">
              <Meter meterpoint={meterpoint}/>
              <Box m={4}>
                <Typography>
                  Generation records:
                </Typography>
                <Generation meterpoint={meterpoint}/>
              </Box>
            </Route>
            <Route path="/blockchain">
              <Box m={4}>
                <Typography>
                  Blockchain:
                </Typography>
                <Blockchain/>
              </Box>
            </Route>
            <Route path="/">
              <Box m={4}>
                <Typography>
                  Welcome to Sitigrid!
                </Typography>
                <Typography>
                  Energy sharing for a carbon neutral network
                </Typography>                
              </Box>
              <Box m={4}>
                <Typography>
                Please select a meter : 
                </Typography>
                <FormControl>
                  <NativeSelect
                    value={meterpoint}
                    onChange={handleChange}
                  >
                    <option disabled aria-label="None" value="" />
                    {listItems}
                  </NativeSelect>
                </FormControl>
              </Box>
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
  );
}
