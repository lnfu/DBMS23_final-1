import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import Login from '@/components/Login';
import { useSession } from 'next-auth/react';

const Home = () => {
  const { data: session } = useSession();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [trigger, setTrigger] = useState(0)
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  const [data, setData] = useState(null);
  useEffect(() => {

    axios.get('http://localhost:3000/api/follows').then((res) => {
      console.log(res.data.data)
      setData(res.data.data)
    })


  }, [trigger])

  const handleRemove = async (row) => {

    await axios.post('http://localhost:3000/api/remove-follow',
      { LifterID: row.LifterID })
      .then((res) => { console.log(res.data) })
      .catch((err) => { console.log(err) })
    setTrigger((prev) => prev + 1)

  }
  return (
    <div>
      <Login />
      {data && <div>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>lifterID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Remove</TableCell>
              <TableCell>Page</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.LifterID}</TableCell>
                  <TableCell>{row.Name}</TableCell>
                  <TableCell>
                    <Button variant="outlined" color="error" onClick={() => handleRemove(row)}>
                      Remove
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant="outlined" href={`http://localhost:3000/${row.LifterID}`}>
                      Page
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>}
    </div >
  );
};

export default Home;
