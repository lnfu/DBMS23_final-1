import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useSession } from 'next-auth/react';

const AddFollows = () => {
  const [lifterID, setLifterID] = useState('');
  const { data: session } = useSession();

  const handleSubmit = async (e) => {
    console.log(session.user.id);

    e.preventDefault();
    try {
      const response = await axios.post('/api/add-follow', {
        UserID: session.user.id,
        LifterID: lifterID,
      });
      console.log(response.data);
      console.log(session.user.id);
      alert('Follow added successfully');
      setUserID('');
      setLifterID('');
    } catch (error) {
      console.error('Error adding follow', error);
      alert('Error adding follow');
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Add Follows
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          variant="outlined"
          margin="normal"
          id="lifterID"
          label="Lifter ID"
          value={lifterID}
          onChange={(e) => setLifterID(e.target.value)}
        />
        <Button variant="outlined" type="submit" sx={{ mt: 2 }}>
          Add Follow
        </Button>
      </form>
    </Container>
  );
};

export default AddFollows;
