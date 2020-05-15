import React, {useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { StyledTableCell, StyledTableRow } from './tableStyles';
import { apiURL } from './api.js';
import useInterval from './useInterval.js';
import { makeStyles } from '@material-ui/core/styles';

const myStyles = makeStyles({
    table: {
      minWidth: 400,
    },
    container: {
      maxHeight: 800,
    },
  });

export default function Blockchain(props){
    const classes = myStyles();
    const [consumptions, setConsumptions] = useState(new Map());
    const [generations, setGenerations] = useState(new Map());

    function compareRecords(a,b)
    {
        var dateA, dateB;
        
        if ( 'consumptionDate' in a[1])
            dateA = parseInt(a[1].consumptionDate);
        else
            dateA = parseInt(a[1].productionDate);

        if ( 'consumptionDate' in b[1])
            dateB = parseInt(b[1].consumptionDate);
        else
            dateB = parseInt(b[1].productionDate); 

        return dateB - dateA;
    }

    async function fetchData() {
        const resCon = await fetch(apiURL+"/consumptions/");

        resCon
            .json()
            .then( resCon => {
                        let myConsumptions = new Map();
                        resCon.forEach( (res) => { 
                                myConsumptions.set( res.Key, res.Record );
                                } 
                        ); 
                        setConsumptions( myConsumptions );
                    }
                 );
        
        const resProd = await fetch(apiURL+"/productions/");
        resProd
            .json()
            .then( resProd => {
                        let myGenerations = new Map();
                        resProd.forEach( (res) => { 
                                myGenerations.set( res.Key, res.Record );
                                }                      
                        ); 
                        setGenerations( myGenerations );
                }
            );
    }

    useEffect(() => {
        fetchData();
    }, []);

    useInterval(() => {
        fetchData();
    }, [10000]);

    if ( consumptions.size === 0 )
    {
        return null;
    }

    const myDocuments = new Map([...consumptions,...generations]);
    const mySortedDocuments = new Map([...myDocuments].sort(compareRecords))

    const listItems = [...mySortedDocuments].map(([Key,Record]) =>
    <StyledTableRow key={Key}>
        <StyledTableCell component="th" scope="row">
            <pre>
            { JSON.stringify(Record,undefined,2) }
            </pre>
        </StyledTableCell>
    </StyledTableRow>
    );

    return (
        <React.Fragment>
        <TableContainer className={classes.container} component={Paper}>
            <Table stickyHeader className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Blockchain documents</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                { listItems }
                </TableBody>
            </Table>
        </TableContainer>
        </React.Fragment>
    );
};