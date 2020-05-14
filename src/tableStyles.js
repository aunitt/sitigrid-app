import { withStyles, makeStyles } from '@material-ui/core/styles';
import { TableCell, TableRow } from '@material-ui/core';

export const useStyles = makeStyles({
    table: {
      minWidth: 400,
    },
    container: {
      maxHeight: 440,
    },
  });

export const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);