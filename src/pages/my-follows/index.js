import React, { useEffect, useState } from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  IconButton,
  Button, TextField,
} from '@mui/material';
import axios from 'axios';
import Login from '@/components/Login';
import { useSession } from 'next-auth/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const { data: session } = useSession();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [trigger, setTrigger] = useState(0)
  const [name, setName] = useState('')
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
  useEffect(() => {

    console.log(name)
  }, [name])
  const handleFollow = async () => {
    await axios.post('http://localhost:3000/api/add-followByName',
      { LifterName: name })
      .then((res) => {
        console.log(res.data)
        toast.success('Successfully added!');
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response && error.response.status === 400) {
          toast.warn(error.response.data.message);
        } else {
          toast.error('An error occurred!');
        }
      })

    setName('')
    setTrigger((prev) => prev + 1)
  }
  return (
    <div>
      <ToastContainer position="bottom-right" />

      <Login />
      <div className='flex flex-row items-center justify-center space-x-2 my-2'>
        <TextField
          id="outlined-basic"
          label="Name"
          value={name}
          onChange={(el) => { setName(el.target.value); }}

        />


        <Button variant="outlined" onClick={handleFollow} >
          Follow
        </Button>
      </div>

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
