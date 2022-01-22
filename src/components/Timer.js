import { useEffect, useState } from 'react';
import './Timer.css';

const writeTime = (t) => {
  if (t < 10) {
    return '0:0' + t;
  } else {
    return '0:' + t;
  }
};

// INTENDED ONLY FOR SECONDS
const Timer = ({ initialTime, whenFinished }) => {

  const [time, setTime] = useState(initialTime) // IN SECONDS
  const [timeStr, setTimeStr] = useState(writeTime(time));

  if (time >= 0) {
    setTimeout(() => {
      setTime(time - 1);
      setTimeStr(writeTime(time));
      // setTimeStr('0:'+time)
    }, 1000);
  } 
  else {
    whenFinished();
  }

  // useEffect(() => {
  // }, []);

  return (
    <div>
      {timeStr}
    </div>
  );
};

export default Timer;
