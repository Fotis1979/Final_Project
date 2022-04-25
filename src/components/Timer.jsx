import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'



const Timer = ({ setQuestions , score, setScore, setMessage}) => {

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [hoursO, setHoursO] = useState(0)
    const [minutesO, setMinutesO] = useState(0)
    const [secondsO, setSecondsO] = useState(0)




    useEffect(() => {

        function incrementSeconds() {
            setSeconds((prev) => (prev + 1))

        } setInterval(incrementSeconds, 1000);


    }, [])


    useEffect(() => {

        function incrementMinutes() {
            setMinutes((prev) => (prev + 1))
        } setInterval(incrementMinutes, 60000);

        minutes === 5 && setMinutes(0)
    }, [])
    useEffect(() => {
        seconds === 10 && setSecondsO("")
        seconds === 60 && setSeconds(0)
        seconds === 60 && setSecondsO(0)
        minutes === 3 && setQuestions("")
        minutes === 3 && setScore(0)
        minutes === 3 && setMessage("")

    }, [seconds])

    return (
        <div>

            <div className="timer">
                <span>Game Ends in 3* mins </span>
                {hoursO}{hours}:{minutesO}{minutes}:{secondsO}{seconds}</div>

        </div>
    )
}

export default Timer
