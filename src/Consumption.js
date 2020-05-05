import React, {Component} from 'react';

class Consumption extends Component {
    constructor(props) {
        super(props);
        this.state = {
          consumptions: []
        };
    }

    // TODO: fill out with fetchs for the proper items
    // TODO: make the fetching async for better performance
    componentDidMount() {
        console.log("inside Consumption componentDidMount");
        this.setState( { consumptions: [
            { key: 1588686856000, productionAmount: 100, productionDate: new Date(1588686856000) },
            { key: 1588596856000, productionAmount: 50, productionDate: new Date(1588596856000) },
            { key: 1588580730000, productionAmount: 75, productionDate: new Date(1588580730000) }
        ]});
    }

    render () {
        const consumptions = this.state.consumptions;
        if(!consumptions)
        { 
            console.log("Null consumptions");
            return null;
        }

        console.log("length = " + consumptions.length);
        const listItems = consumptions.map((consumption) =>
        <li key={consumption.key}>
        <span>{consumption.productionDate.toString()}</span> |  {consumption.productionAmount}
        </li>
        );

        return (
            <div className="App">
            <ul className="items">
                {listItems}
            </ul>
            </div>
        );
    }
  }

  export default Consumption;