import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../actions/employeeActions'; // Adjust path as necessary
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: '10px 10px',
    maxWidth: 950
  },
  tableHeaderCell: {
    fontWeight: 'bold',
    backgroundColor: '#3f51b5',
    color: '#ffffff'
  },
  avatar: {
    backgroundColor: '#3f51b5',
    color: '#ffffff'
  },
  name: {
    fontWeight: 'bold',
    color: '#3f51b5'
  },
  status: {
    fontWeight: 'bold',
    fontSize: '0.75rem',
    color: 'white',
    backgroundColor: 'grey',
    borderRadius: 8,
    padding: '3px 10px',
    display: 'inline-block'
  }
});

const Employees = () => {
  const dispatch = useDispatch();
  const { users, isAdmin } = useSelector(state => state.employee);
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {isAdmin ? (
        <>
          <Box textAlign='center' p={2}>
            <Typography variant='h4' component='div'>
              Employee Details
            </Typography>
          </Box>
          <TableContainer component={Paper} classes={{ root: classes.tableContainer }}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.tableHeaderCell}>Name</TableCell>
                  <TableCell className={classes.tableHeaderCell} align="right">Email</TableCell>
                  <TableCell className={classes.tableHeaderCell} align="right">Type</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.email} hover>
                    <TableCell component="th" scope="row" className={classes.name}>
                      {user.fullName}
                    </TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="right">
                      <Box textAlign="center" className={classes.status} style={{ backgroundColor: (user.type && user.type === 'admin') ? 'green' : 'blue' }}>
                        {user.type ? user.type.charAt(0).toUpperCase() + user.type.slice(1) : 'N/A'}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      ) : (
        <Box textAlign='center' p={2}>
          <Typography variant='h6' component='div' color="error">
            This page is only for Admins.
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Employees;
