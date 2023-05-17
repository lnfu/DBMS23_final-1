import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableHead, TableBody, TableRow, TableCell, TablePagination } from '@mui/material';

function LiftsData(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const capitalizedType = props.type.charAt(0).toUpperCase() + props.type.slice(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  return (
    <>
      <h1 className=" uppercase text-5xl">{props.type}</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Meet ID</TableCell>
            <TableCell>Lifter ID</TableCell>
            <TableCell>Equipment</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Bodyweight (kg)</TableCell>
            <TableCell>{props.type} 1KG (kg)</TableCell>
            <TableCell>{props.type} 2KG (kg)</TableCell>
            <TableCell>{props.type} 3KG (kg)</TableCell>
            <TableCell>{props.type} Best (kg)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.MeetID + row.LifterID}>
              <TableCell>{row.MeetID}</TableCell>
              <TableCell>{row.LifterID}</TableCell>
              <TableCell>{row.Equipment}</TableCell>
              <TableCell>{row.Age}</TableCell>
              <TableCell>{row.BodyweightKg}</TableCell>
              <TableCell>{row[`${capitalizedType}1Kg`]}</TableCell>
              <TableCell>{row[`${capitalizedType}2Kg`]}</TableCell>
              <TableCell>{row[`${capitalizedType}3Kg`]}</TableCell>
              <TableCell>{row[`${props.type}Best`]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={props.data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}

export default LiftsData;
