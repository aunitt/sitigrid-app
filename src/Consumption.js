import React, {Component} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

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
            { key: 1588580730000, productionAmount: 75, productionDate: new Date(1588580730000) },
            { key: 1588596856000, productionAmount: 50, productionDate: new Date(1588596856000) },
            { key: 1588686856000, productionAmount: 100, productionDate: new Date(1588686856000) },
            { key: 1588700199000, productionAmount: 80, productionDate: new Date(1588686856000) },
            { key: 1588711539000, productionAmount: 95, productionDate: new Date(1588686856000) }
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
                {consumption.productionDate.toString()}
            </StyledTableCell>
            <StyledTableCell align="right">
                {consumption.productionAmount}
            </StyledTableCell>
        </StyledTableRow>
        );

        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Date</StyledTableCell>
                            <StyledTableCell align="right">Electricity consumed</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listItems}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
  }

  export default Consumption;