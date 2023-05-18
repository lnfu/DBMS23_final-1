import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LiftsData from './LiftsData';
import axios from 'axios';
function Table() {
  const [liftType, setLiftType] = useState('bench');
  const [benchData, setBenchData] = useState([]);
  const [deadliftData, setDeadliftData] = useState([]);
  const [squatData, setSquatData] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/lifts/bench`)
      .then((res) => {
        setBenchData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`/api/lifts/deadlift`)
      .then((res) => {
        setDeadliftData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get(`/api/lifts/squat`)
      .then((res) => {
        setSquatData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <ButtonGroup className="my-4">
        <Button onClick={() => setLiftType('bench')}>Bench</Button>
        <Button onClick={() => setLiftType('deadlift')}>Deadlift</Button>
        <Button onClick={() => setLiftType('squat')}>Squat</Button>
      </ButtonGroup>
      {liftType === 'bench' && <LiftsData type="bench" data={benchData} />}
      {liftType === 'deadlift' && <LiftsData type="deadlift" data={deadliftData} />}
      {liftType === 'squat' && <LiftsData type="squat" data={squatData} />}
    </div>
  );
}

export default Table;
