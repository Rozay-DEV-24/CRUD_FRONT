import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { setUserSlice } from '../containers/usersSlice';
import { DELETE_USER_BY_ID, GET_USERS } from './sagas/types';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

export default function MyTable() {
  const rows = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatch({ type: GET_USERS });
  }, [dispatch]);

  const filteredRows = rows.filter((row) => {
    if (row.stuId != null && row.stuId != '' && row.stuId > 0) {
      return true;
    }
    return false;
  });

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const searchedRows = filteredRows.filter((row) => {
    return row.stuId.toString().includes(searchValue);
  });

  return (
    <div>
      <h1>Student Table</h1>
      <TextField
        label="Search by Stu ID"
        value={searchValue}
        onChange={handleSearchChange}
        variant="outlined"
        margin="normal"
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">L-Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Stu ID</TableCell>
              <TableCell align="center">Phone No</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchedRows.length > 0 ? (
              searchedRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="center">{row.lname}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.stuId}</TableCell>
                  <TableCell align="center">{row.phno}</TableCell>
                  <TableCell align="center">{row.address}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="inherit"
                      onClick={() => {
                        dispatch(setUserSlice(row));
                      }}
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      variant="inherit"
                      onClick={() => {
                        dispatch({ type: DELETE_USER_BY_ID, user: row });
                      }}
                    >
                      <DeleteForeverIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No data available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
