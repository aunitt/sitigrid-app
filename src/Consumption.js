import React, {useState, useEffect, useCallback} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { useStyles, StyledTableCell, StyledTableRow } from './tableStyles';
import { apiURL } from './api.js';
import useInterval from './useInterval.js';
import moment from 'moment'
import { Typography } from '@material-ui/core';

const consumptionTariff = 0.09

export default function Consumption(props){
    const [consumptions, setConsumptions] = useState([]);
    const classes = useStyles();

    const fetchDataCallback = useCallback( async function fetchData() {
        const res = await fetch(apiURL+"/meters/" + props.meterpoint + "/consumptions/");
        res
            .json()
            .then(res => {
                setConsumptions(
                    res.map(
                        (consumption) => ({ 
                            key: consumption.Key,
                            consumptionAmount: consumption.Record.consumptionAmount,
                            consumptionDate: consumption.Record.consumptionDate,
                            cost: consumption.Record.consumptionAmount * consumptionTariff
                        }) 
                    )
                );
            }
            )
    }
    , [props.meterpoint]);

    useEffect(() => {
        console.log("inside Consumption useEffect");
        fetchDataCallback();
    }, [fetchDataCallback]);

    useInterval(() => {
        console.log("inside Consumption useInterval");
        fetchDataCallback();
        /*
        const rawConsumptions = [
            { consumptionAmount: 75, consumptionDate: 1588580730000 },
            { consumptionAmount: 50, consumptionDate: 1588596856000 },
            { consumptionAmount: 100, consumptionDate: 1588686856000 },
            { consumptionAmount: 80, consumptionDate: 1588700199000 },
            { consumptionAmount: 95, consumptionDate: 1588711539000 },
            { consumptionAmount: 25, consumptionDate: 1589580730000 },
            { consumptionAmount: 50, consumptionDate: 1589596856000 },
            { consumptionAmount: 75, consumptionDate: 1589686856000 },
            { consumptionAmount: 65, consumptionDate: 1589700199000 },
            { consumptionAmount: 45, consumptionDate: 1589711539000 },
            { consumptionAmount: 10, consumptionDate: 1590580730000 },
            { consumptionAmount: 15, consumptionDate: 1590596856000 },
            { consumptionAmount: 20, consumptionDate: 1590686856000 },
            { consumptionAmount: 25, consumptionDate: 1590700199000 },
            { consumptionAmount: 30, consumptionDate: 1590711539000 }  
        ];
        const myConsumptions = rawConsumptions.map( 
            (consumption) => ({ 
                            key: consumption.consumptionDate,
                            consumptionAmount: consumption.consumptionAmount,
                            consumptionDate: consumption.consumptionDate,
                            cost: consumption.consumptionAmount * consumptionTariff
                })
            );
        setConsumptions( myConsumptions );
        */
    }, [10000]);

    if(!Array.isArray(consumptions) || consumptions.length === 0)
    { 
        console.log("Null consumptions");
        return null;
    }

    console.log("Consumptions length = " + consumptions.length);
    console.log(consumptions[0].consumptionDate);

    // Make sure the data is sorted by date
    const myConsumptions = consumptions.sort((a,b) => a.consumptionDate - b.consumptionDate);
    const myConsumptionsRev = myConsumptions.slice().reverse();

    const listItems = myConsumptionsRev.map((consumption) =>
    <StyledTableRow key={consumption.key}>
        <StyledTableCell component="th" scope="row">
            {moment(consumption.consumptionDate).format('DD/MM/YY HH:mm')}
        </StyledTableCell>
        <StyledTableCell align="right">
            {consumption.consumptionAmount.toFixed(2)}
        </StyledTableCell>
        <StyledTableCell align="right">
            {consumption.cost.toFixed(2)}
        </StyledTableCell>
    </StyledTableRow>
    );

    return (
        <React.Fragment>
        <Typography variant="caption">
        <ResponsiveContainer height={350} width="95%">
            <AreaChart data={myConsumptions}  margin={{ top: 20, right: 30, left: 10, bottom: 60 }}>
                <defs>
                    <linearGradient id="colorCons" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis 
                    dataKey="consumptionDate"
                    name="Time"
                    domain = {['auto', 'auto']}
                    type="number"
                    tickFormatter={(unixTime) => moment(unixTime).format('DD/MM/YY HH:mm')}
                    angle={-45} 
                    textAnchor="end"
                />
                <YAxis />
                <Tooltip 
                    labelFormatter={(unixTime) => moment(unixTime).format('DD/MM/YY HH:mm')}
                    formatter={(cost) => "£" + cost.toFixed(2)}
                />
                <Area type="monotone" dataKey="cost" stroke="#8884d8" fillOpacity={1} fill="url(#colorCons)" />
            </AreaChart>
        </ResponsiveContainer>
        </Typography>
        <TableContainer className={classes.container} component={Paper}>
            <Table stickyHeader className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell align="right">Electricity consumed (kWh)</StyledTableCell>
                        <StyledTableCell align="right">Cost (£)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listItems}
                </TableBody>
            </Table>
        </TableContainer>
        </React.Fragment>
    );
}

