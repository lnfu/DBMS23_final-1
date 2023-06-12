import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import axios from 'axios';
const Match = ({ match }) => {
  useEffect(() => {
    console.log(match);
  }, [match]);

  return (
    <div>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Card className="mt-2 w-[800px] ">
            <CardHeader
              title={match.Name}
              //  title={`${match.MeetName}, ${match.MeetCountry}, ${match.MeetState}`}
              subheader={match.Date.substring(0, 10)}
            />
            <CardContent>
              <Typography variant="body1" color="initial">
                Meet: {`${match.MeetName}, ${match.MeetCountry}, ${match.MeetState}`}
              </Typography>
              <Typography variant="body1" color="initial">
                Place: {match.Place}
              </Typography>
              <Typography variant="body1" color="initial">
                Bench: {match.Best3BenchKg}
              </Typography>
              <Typography variant="body1" color="initial">
                Squat: {match.Best3SquatKg}
              </Typography>
              <Typography variant="body1" color="initial">
                Deadlift: {match.Best3DeadliftKg}
              </Typography>
              <Typography variant="body1" color="initial">
                McCulloch: {match.McCulloch}
              </Typography>
              <Typography variant="body1" color="initial">
                Wilks : {match.Wilks}
              </Typography>

              <Typography variant="body1" color="initial">
                Equipment : {match.Equipment}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Match;
