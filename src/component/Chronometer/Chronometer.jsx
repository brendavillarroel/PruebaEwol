import React from 'react'
import { useEffect, useState } from 'react'
import {DetailNote} from './DetailNote'
import {DetailTime} from './DetailTime'
import {Timer} from '../Timer/Timer.jsx'
import './Chronometer.css';


    function Chronometer({ count }) {


    const [time, setTime] = useState(0)
    const [timerOn, setTimeOn] = useState(false)

    const [inputText, setInputText] = useState("")

    const [timeList, setTimeList] = useState([])
    const newTime = (lap) => {
        setTimeList([lap, ...timeList])
    }

    const [list, setList] = useState([])
    const newList = (lap) => {
        setList([lap, ...list])
    }

    const manejarForm = (event) => {
        setInputText(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault()
        newTime(inputText)
        newList(time)
        setInputText("")
    }

    useEffect(() => {
        let interval = null

        if (timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [timerOn])

    const deleteListNote = (id) => {
        const filteredListNote = timeList.filter((e,index) =>index!== id);
        setTimeList(filteredListNote)
    }

    const deleteListTime = (id) => {
        const filteredListTime = list.filter((e,index) =>index!== id);
        setList(filteredListTime)
    }

    return (
        <div className="count-container">
            <div>
                <div className='content'>
                    <h1 className='title'>Chronometer</h1>
                </div>

                <div className='count-container__qty'>
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 100) % 100)).slice(-2)}</span>
                </div>

                <div className='count-container__counter'>

                    {!timerOn && time === 0 && (
                        <button disabled={count < 0 ? true : null} className='btn' onClick={() => setTimeOn(true)}>Start</button>
                    )}
                    {timerOn && <button className='btn' onClick={() => setTimeOn(false)}>Stop</button>}
                    {!timerOn && time > 0 && (
                        <button className='btn' onClick={() => setTime(0)}>Reset</button>
                    )}
                    {!timerOn && time > 0 && (
                        <button className='btn' onClick={() => setTimeOn(true)}>Resume</button>
                    )}
                </div>
            </div>

            <div>
                <form className='form' onSubmit={submit}>
                    <input value={inputText} onChange={manejarForm} />
                    <button className='btn'>Vuelta</button>
                   

                    <div className='ListDetails'>
                        <div>
                            {timeList.map((e,index) => <DetailNote
                                                    timeList={timeList}
                                                    detail={e}
                                                    deleteListNote={deleteListNote}
                                                    id={index}
                                                     />
                            )}
                        </div>
                        <div>
                            {list.map((e , index)=> <DetailTime
                                                    
                                                    detail= {e}
                                                    id={index}
                                                    deleteListTime={deleteListTime}
                                                    /> )}
                        </div>
                    </div>
                </form>
            </div>
            <Timer count={count} timerOn={timerOn} />
        </div>


    )

}
    
    export {Chronometer};