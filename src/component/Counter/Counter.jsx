import React, {useState} from "react";
import {Chronometer} from '../Chronometer/Chronometer.jsx'
import './Counter.css'

const Counter = () =>{



    const [count,setCount] = useState(0)

    const add = (num) => {
        setCount(count + num)
    }
    return(
        <><div className='container'>
            <div >
            <div className='content'>
                    <h1 className='title'>Counter</h1>
                </div>
                <button
                    className="btn"
                    onClick={() => add(-1)}
                >
                    -
                </button>
                <span className='detail'>{count}</span>
                <button
                   className="btn"
                    onClick={() => add(+1)}
                >
                    +
                </button>
                <div>
                <button className="btn"
                    onClick={() => setCount(0)}
                >
                    Reset
                </button>
            </div>   
            </div>

            <div>
                <Chronometer count={count}  />
            </div>
        </div>
        </>
    )
}

export {Counter}