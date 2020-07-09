import React from 'react';
import { useSelector } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  img: {
    width: '50px',
    height: '50px',
    border: '1px solid lightgrey',
    transition: '1s',
    '&:hover': {
      transform: 'scale(1.5)'
    }
  },
  tableRow: {
    '&:hover': {
      backgroundColor: '#e8eaf6',
      cursor: 'pointer'
    }
  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();
  const rows = useSelector(state => state.rows)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">Vendor</StyledTableCell>
            <StyledTableCell align="right">Pack</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow className={classes.tableRow} onClick={() => props.history.push(`/catalog/${row.id}`)} key={row.id}>
              <StyledTableCell scope="row">{row.id}</StyledTableCell>
              <StyledTableCell align="right">
                <img className={classes.img} alt="itemPic" src={row.img} />
              </StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right">{row.vendor}</StyledTableCell>
              <StyledTableCell align="right">{row.pack}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

