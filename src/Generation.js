import React, {useState, useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { useStyles, StyledTableCell, StyledTableRow } from './tableStyles';
import moment from 'moment'

const generationTariff = 0.07

export default function Generation(props) {
    const [generations, setGenerations] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        console.log("inside Generation useEffect");
        const rawGenerations = [
            { generationAmount: 65, generationDate: 1588580730000 },
            { generationAmount: 75, generationDate: 1588596856000 },
            { generationAmount: 110, generationDate: 1588686856000 },
            { generationAmount: 70, generationDate: 1588700199000 },
            { generationAmount: 60, generationDate: 1588710199000 },
            { generationAmount: 45, generationDate: 1588711539000 }
        ];
        const myGenerations = rawGenerations.map( 
            (generation) => ({ 
                            key: generation.generationDate,
                            generationAmount: generation.generationAmount,
                            generationDate: generation.generationDate,
                            revenue: generation.generationAmount * generationTariff
                })
            );
        setGenerations( myGenerations );
    }, []);

    if(!Array.isArray(generations) || generations.length == 0)
    { 
        console.log("Null generations");
        return null;
    }

    console.log("length = " + generations.length);
    const listItems = generations.map((generation) =>
    <StyledTableRow key={generation.key}>
        <StyledTableCell component="th" scope="row">
            {moment(generation.generationDate).format('DD/MM/YY HH:mm')}
        </StyledTableCell>
        <StyledTableCell align="right">
            {generation.generationAmount}
        </StyledTableCell>
        <StyledTableCell align="right">
            {generation.revenue.toFixed(2)}
        </StyledTableCell>
    </StyledTableRow>
    );

    return (
        <React.Fragment>
        <Typography variant="caption">
        <ResponsiveContainer height={350} width="95%">
            <AreaChart data={generations}  margin={{ top: 20, right: 30, left: 10, bottom: 60 }}>
                <defs>
                    <linearGradient id="colorCons" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#85ed7e" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#85ed7e" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis 
                    dataKey="generationDate"
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
                    formatter={(revenue) => "£" + revenue.toFixed(2)}
                />
                <Area type="monotone" dataKey="revenue" stroke="#85ed7e" fillOpacity={1} fill="url(#colorCons)" />
            </AreaChart>
        </ResponsiveContainer>
        </Typography>
        <TableContainer component={Paper}>
            <Table stickyHeader className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Date</StyledTableCell>
                        <StyledTableCell align="right">Electricity generated (kWh)</StyledTableCell>
                        <StyledTableCell align="right">Revenue (£)</StyledTableCell>
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

