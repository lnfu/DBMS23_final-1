import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Login from '../components/Login';
import AddFollows from '../components/AddFollows';
import Table from '@/components/Table';
const Home = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Login />

      <Table />
      <AddFollows />
    </div>
  );
};

export default Home;
