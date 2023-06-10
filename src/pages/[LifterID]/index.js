import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Login from '@/components/Login';
import Table from '@/components/Table';
import { useRouter } from 'next/router';
const Home = () => {

  const router = useRouter();
  const LifterID = router.query.LifterID;
  return (
    <div>
      {LifterID}
    </div>
  );
};

export default Home;
