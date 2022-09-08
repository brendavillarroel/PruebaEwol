import React from "react";
import { useState, useEffect } from "react";
import './Timer.css'

const Timer = ({count, timerOn}) =>  {

  const totalTime = 5;
    let [timeLeft, setTimeLeft] = useState(totalTime)
    const [timeOn, setTimeOn] = useState(false);
   

    useEffect(()=>{
     setTimeLeft(totalTime);     
    },[timeOn]);

    const startTimer = () => {
      if(timeOn){
        setTimeout(() => {
          if (timeLeft > 0) {
              setTimeLeft(timeLeft -= 1);
          }
      }, 1000)
      }
    }

    const timeFormat = (time) => {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
    }

    startTimer();


  
    return (
     
        <div className='count-container'>
          <div className="content">
          <h1 className="title">Timer</h1>
           <span>
            {timeFormat(timeLeft)}
           </span>
        </div>
        <div>
        {!(timeOn) && (
         <div className="timerButton">
         <div ><button  className="timerButton-btn"
         onClick={()=> setTimeOn(true)}  disabled={count < 0|| timerOn ? true : null}><span className="btn">Start</span></button>
         </div>
         </div>
        )}
         {(timeOn) && (
        <div className="timerButton">
        <div><button className="timerButton-btn " onClick={()=> setTimeOn(false)}><span className="btn">Stop</span></button>
        </div>  
        </div>
        )}       
          {(timeOn  && timeLeft === 0 )&&(
                
               <div className="timerButton">
               <div><button className="timerButton-btn" onClick={()=> {
                                  setTimeOn(false) }}>
                                  <span className="btn">Timer ok</span></button>
               </div>  
               </div>
            )}
            
        </div>
     </div>

    );
  }



export {Timer};