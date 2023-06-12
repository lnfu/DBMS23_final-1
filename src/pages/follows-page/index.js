import React, { useEffect, useState } from 'react';

import axios from 'axios';
import Login from '@/components/Login';
import { useSession } from 'next-auth/react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Match2 from '@/components/Match2';
const Home = () => {
  const { data: session } = useSession();
  const [followid, setFollowid] = useState([])
  const [matches, setMatches] = useState([])

  useEffect(() => {

    axios.get('http://localhost:3000/api/follows').then((res) => {
      console.log(res.data.data)
      const ids = res.data.data.map(lifter => lifter.LifterID);
      console.log(ids)
      setFollowid(ids)
    })

  }, [])

  useEffect(() => {
    if (followid.length > 0) {
      axios.post('/api/group', { LifterID: followid })
        .then((res) => {
          console.log(res.data.data)
          setMatches(res.data.data)
        })
        .catch((err) => { console.log(err) })
    }

  }, [followid])
  return (
    <div>
      <ToastContainer position="bottom-right" />

      <Login />

      {matches.length > 0 && matches.map((match, index) => (
        <Match2 key={index} match={match} />
      ))}
    </div>


  );
};

export default Home;
