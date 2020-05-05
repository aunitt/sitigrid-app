import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Consumption from './Consumption';

class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          customerName: ""
        };
    }

    componentDidMount() {
        console.log('componentDidMount called');
        this.setState({customerName: "Ashley"});
    }

    render () {
      return (
        <Box m={4} component="div" display="block">
            <Typography>
                Hello {this.state.customerName}
            </Typography>
            <Box pt={4}>
            <Typography>
                Consumption records:
            </Typography>
            <Consumption/>
            </Box>
        </Box>
      );
    }
  }

  export default Customer;