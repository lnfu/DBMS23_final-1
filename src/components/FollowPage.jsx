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
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FollowPage(props) {
  return (
    <div className="mx-10">
      <h1>asd</h1>
      {data.map((index) => (
        <h1 key={index}>{index}</h1>
      ))}
    </div>
  );
}

export default FollowPage;
