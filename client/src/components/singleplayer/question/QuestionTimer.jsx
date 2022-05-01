import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


    const QuestionTimer = ({ setQuestions, setWrightAnswer, setColor, setMessage, message, newQuestion, setNewQuestion}) => {

    const [seconds, setSeconds] = useState(0)



    useEffect(() => {

        function incrementSeconds() {
            setSeconds((prev) => (prev + 1))

        } setInterval(incrementSeconds, 1000);


    }, [])

    useEffect(() => {
        seconds === 16 && setSeconds(0)
        seconds === 16 && setNewQuestion(true)
        seconds  <= 15 && setNewQuestion(false)
        message && setSeconds(0)


    }, [seconds])

    useEffect(() => {
       newQuestion && fetch("https://the-trivia-api.com/api/questions?limit=50&difficulty=medium")
            .then(res => res.json())
            .then(data => setQuestions((data[Math.floor(Math.random() * 50)])))

        setMessage("")
        setColor("")
        setWrightAnswer("")
    }, [newQuestion])

    return (
        <div className="question-timer">

            <span className="sec">{seconds}</span>

            <span style={{ fontSize: "20px" , paddingTop: "20px"}}>U have 15 secs for each Question !</span>

        </div>
    )
}

export default QuestionTimer
