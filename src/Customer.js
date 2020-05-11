import React, {useState, useEffect} from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { apiURL } from './api.js';

export default function Customer(props) {
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

    return (
      <Box m={4} component="div" display="block">
          <Typography>
              Hello {customerName}
          </Typography>
      </Box>
    );
  }
