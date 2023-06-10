import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Login from '@/components/Login';
import axios from 'axios';
const Home = () => {
  const { data: session } = useSession();
  useEffect(() => {

    axios.get('http://localhost:3000/api/follows').then((res) => {
      console.log(res.data)
    })


  }, [])
  return (
    <div>
      <Login />
    </div>
  );
};

export default Home;
