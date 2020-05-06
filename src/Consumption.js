import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis } from 'recharts';
import { useStyles, StyledTableCell, StyledTableRow } from './tableStyles';

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
            { key: 1588580730000, consumptionAmount: 75, consumptionDate: new Date(1588580730000) },
            { key: 1588596856000, consumptionAmount: 50, consumptionDate: new Date(1588596856000) },
            { key: 1588686856000, consumptionAmount: 100, consumptionDate: new Date(1588686856000) },
            { key: 1588700199000, consumptionAmount: 80, consumptionDate: new Date(1588686856000) },
            { key: 1588711539000, consumptionAmount: 95, consumptionDate: new Date(1588686856000) }
        ]});
    }

    render () {
        const classes = useStyles;

        const consumptions = this.state.consumptions;
        if(!consumptions)
        { 
            console.log("Null consumptions");
            return null;
        }

        console.log("length = " + consumptions.length);
        const listItems = consumptions.map((consumption) =>
        <StyledTableRow key={consumption.key}>
            <StyledTableCell component="th" scope="row">
                {consumption.consumptionDate.toString()}
            </StyledTableCell>
            <StyledTableCell align="right">
                {consumption.consumptionAmount}
            </StyledTableCell>
        </StyledTableRow>
        );

        return (
            <React.Fragment>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Date</StyledTableCell>
                            <StyledTableCell align="right">Electricity consumed (kWh)</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listItems}
                    </TableBody>
                </Table>
            </TableContainer>
            <ResponsiveContainer height={300} width="95%">
                <AreaChart data={consumptions}  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorCons" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="key" />
                    <YAxis />
                    <Area type="monotone" dataKey="consumptionAmount" stroke="#8884d8" fillOpacity={1} fill="url(#colorCons)" />
                </AreaChart>
            </ResponsiveContainer>
            </React.Fragment>
        );
    }
  }

  export default Consumption;