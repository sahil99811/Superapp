import increase from '../../assets/increase.png'
import decrease from '../../assets/decrease.png'
import "./Timer.css";
import { useState } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
export default function Timer() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hours, SetHours] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePauseStart = () => {
    let totaltime = second + hours * 3600 + minute * 60;
    if (totaltime === 0) {
      setIsPlaying(false);
      return;
    }
    setIsPlaying((prev) => !prev);
  };

  const onComplete = () => {
    setIsPlaying(false);
    // sound.current.play();
    SetHours(0);
    setMinute(0);
    setSecond(0);
  };
  const renderTime = (remainingTime) => {
    if (remainingTime < 0) {
      return <div className="timer-countdown">Time Over!!</div>;
    }

    let minute = Math.floor(remainingTime / 60);
    let secondLeft = remainingTime % 60;
    let hoursLeft = Math.floor(minute / 60);
    let minutesLeft = minute % 60;

    if (secondLeft < 10) {
      secondLeft = `0${secondLeft}`;
    }

    if (minutesLeft < 10) {
      minutesLeft = `0${minutesLeft}`;
    }

    if (hoursLeft < 10) {
      hoursLeft = `0${hoursLeft}`;
    }

    return `${hoursLeft}:${minutesLeft}:${secondLeft}`;
  };

 
  return (
    <div className='container-timer'>
      <div className="timer">
      <CountdownCircleTimer
       size={130}
       strokeWidth={5}
       trailColor="#191e39"
        isPlaying={isPlaying}
       duration={second + hours * 3600 + minute * 60}
       colors={["#ff6a6a"]}
       colorsTime={[10]}
       onComplete={onComplete}
       >
       {({ remainingTime }) => (
        <div className="timer-countdown">{renderTime(remainingTime)}</div>
       )}
      </CountdownCircleTimer>

      </div>
      <div className='time-setter'>
       <div className="container-input" >
          <div className="input">
            <h3>Hours</h3>
            <img src={increase} onClick={() => hours < 23 ? SetHours(hours + 1) : SetHours(0)}></img>
            <p>{hours <10 ? `0${hours}`:hours}</p>
            <img src={decrease} onClick={()=>hours > 1 ? SetHours(hours - 1) : SetHours(23)}/>
          </div>
          <p className='separation'>:</p>
          <div className="input">
            <h3>Minutes</h3>
            <img src={increase} onClick={() =>minute < 59 ? setMinute(minute + 1) : setMinute(0)}></img>
            <p>{minute <10 ? `0${minute}`:minute}</p>
            <img src={decrease} onClick={()=>minute > 1 ? setMinute(minute - 1) : setMinute(59)}></img>
          </div>
          <p className='separation'>:</p>
          <div className="input">
            <h3>Seconds</h3>
            <img src={increase} onClick={() =>  second < 59 ? setSecond(second + 1) : setSecond(0)}></img>
            <p>{second <10 ? `0${second}`:second}</p>
            <img src={decrease} onClick={()=>second > 1 ? setSecond(second - 1) : setSecond(59)}></img>
          </div>
       </div>
       {isPlaying ? (
          <button onClick={handlePauseStart}>Pause</button>
        ) : (
          <button onClick={handlePauseStart}>Start</button>
        )}
      </div>
    </div>
  );
}
