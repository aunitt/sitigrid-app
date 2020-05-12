import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function Customer(props) {
    return (
      <Box m={4} component="div" display="block">
          <Typography>
              Hello {props.customerName}
          </Typography>
      </Box>
    );
  }
