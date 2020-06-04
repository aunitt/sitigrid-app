import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function Meter(props) {
    return (
      <Box m={4} component="div" display="block">
          <Typography>
              Meter: {props.meterpoint}
          </Typography>
      </Box>
    );
  }
