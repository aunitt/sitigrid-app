import React, {Component} from 'react';
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
        <div>
        <p>Hello {this.state.customerName}</p>
        Consumption records:
        <Consumption/>
        </div>
      );
    }
  }

  export default Customer;