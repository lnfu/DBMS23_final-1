import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Login from '@/components/Login';
import Table from '@/components/Table';
import { useRouter } from 'next/router';
import axios from 'axios';
import Match from '@/components/Match';
import Typography from '@mui/material/Typography'
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
const Home = () => {

  const router = useRouter();
  const [data, setData] = useState([])
  const [matches, setMatches] = useState([])
  const { LifterID } = router.query;
  const [champion, setChampion] = useState(0)
  const [second, setSecond] = useState(0)
  const [third, setThird] = useState(0)
  useEffect(() => {
    if (LifterID) {
      // console.log(LifterID)
      axios.get(`http://localhost:3000/api/lifters/${LifterID}`)
        .then(res => {
          setData(res.data.data)
          setMatches(res.data.data.recent_matches)
          // console.log(res.data.data)
        })
        .catch(err => { console.log(err) })
    }
  }, [LifterID])
  useEffect(() => {
    if (matches.length > 0 && champion === 0 && second === 0 && third === 0) {
      console.log(matches.length)
      let temp1 = 0;
      let temp2 = 0;
      let temp3 = 0;
      for (let i = 0; i < matches.length; i++) {

        if (matches[i].Place === '1') {
          temp1++;
        }
        else if (matches[i].Place === '2') {
          temp2++;
        }
        else if (matches[i].Place === '3') {
          temp3++;
        }

      }
      setChampion(temp1);
      setSecond(temp2);
      setThird(temp3);
    }
  }, [matches])
  return (
    <div>
      <Login />

      {(data && data.player_info) &&
        <div className='item-center'>
          <Typography variant="h2" color="initial" className='text-center'>{data.player_info[0].Name}        {data.player_info[0].Sex === 'M' ? <MaleIcon /> : <FemaleIcon />}</Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Card className="mt-2 w-[300px] ">

                <CardContent>
                  <Typography variant='subtitle1' color="initial" className='text-start'>Champion:{champion}</Typography>
                  <Typography variant='subtitle1' color="initial" className='text-start'>Second:{second}</Typography>
                  <Typography variant='subtitle1' color="initial" className='text-start'>Third:{third}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Typography variant="h1" color="initial"></Typography>
          <Typography variant="h1" color="initial"></Typography>

          {matches.length > 0 && matches.map((match, index) => (
            <Match key={index} match={match} />
          ))}
        </div>}

    </div>
  );
};

export default Home;
