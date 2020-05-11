import React, {useState, useEffect} from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


export default function Customer(props) {
    const[customerName, setCustomerName] = useState("");

    useEffect(() => {
      setCustomerName("Ashley");
    }, []);

    return (
      <Box m={4} component="div" display="block">
          <Typography>
              Hello {customerName}
          </Typography>
      </Box>
    );
  }
