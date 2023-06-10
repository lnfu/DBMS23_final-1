import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  IconButton,
  Button,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LiftsData(props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [liked, setLiked] = useState({});
  const capitalizedType = props.type.charAt(0).toUpperCase() + props.type.slice(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleLike = async (row) => {
    await axios
      .post('http://localhost:3000/api/add-follow', {
        LifterID: row.LifterID,
      })
      .then((res) => {
        console.log(res.data);
        toast.success('Successfully added!');
      })
      .catch((error) => {
        console.log(error);
        if (error.response && error.response.status === 400) {
          toast.warn('You have already added this lifter!');
        } else {
          toast.error('An error occurred!');
        }
      });
  };

  return (
    <div className="mx-10">
      <ToastContainer position="bottom-right" />
      <h1 className=" uppercase text-5xl">{props.type}</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Meet</TableCell>
            <TableCell>Lifter</TableCell>
            <TableCell>Equipment</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Bodyweight (kg)</TableCell>
            <TableCell>{props.type} 1KG (kg)</TableCell>
            <TableCell>{props.type} 2KG (kg)</TableCell>
            <TableCell>{props.type} 3KG (kg)</TableCell>
            <TableCell>{props.type} Best (kg)</TableCell>
            <TableCell>Follow</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.MeetName}</TableCell>
                <TableCell>{row.LifterName}</TableCell>
                <TableCell>{row.Equipment}</TableCell>
                <TableCell>{row.Age}</TableCell>
                <TableCell>{row.BodyweightKg}</TableCell>
                <TableCell>{row[`${capitalizedType}1Kg`]}</TableCell>
                <TableCell>{row[`${capitalizedType}2Kg`]}</TableCell>
                <TableCell>{row[`${capitalizedType}3Kg`]}</TableCell>
                <TableCell>{row[`${props.type}Best`]}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => handleLike(row)}>
                    Follow
                  </Button>
                  {/* <IconButton onClick={() => handleLike(row)}>
                    <FavoriteBorderIcon />
                  </IconButton> */}
                </TableCell>
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
    </div>
  );
}

export default LiftsData;
