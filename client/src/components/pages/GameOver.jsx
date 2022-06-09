import React from 'react'
import x from '../../../src/assets/images/x.png'
import pie3 from '../../assets/images/pie3.png'
import MyContext from "../.././context/MyContext"
import { useContext, useEffect } from 'react';
import Nav from './Nav';
import "../../../src/styling/settings.css";


const GameOver = () => {

    const context = useContext(MyContext);
    const {

        messagePie,
        setMessagePie,
        messageDiamonds,
        setMessageDiamonds,
        diamondPoints,
        pie,
        gameOver,
        score,
        setScore,

    } = context;


    useEffect(() => {
        setTimeout(() => {
            setMessageDiamonds(`U have won ${diamondPoints} DiamondPointS`)
        }, 3000);
        messageDiamonds && setScore(score + diamondPoints)

    }, [diamondPoints, messageDiamonds, setMessageDiamonds, setScore])

    useEffect(() => {
        pie === true && gameOver === true &&
            setMessagePie("Congrats' U CompleteD the Pie +199 PointS")
        messagePie && score < 1969 &&
            setScore(score + 199)
        console.log(score);

    }, [gameOver, pie, messagePie, setScore])

    return (
        <div>
            <Nav />

            <div className="gameOver">
                <p className="finalScore"> Your Final Score : {score}</p>
                {messagePie ? <img className="popUp" src={pie3} alt="Game_Over" /> : <img src={x} alt="Game_Over" />}
            </div>

            {<p className="cat">
                {messageDiamonds}</p>}

            {pie === true && <p className="cat">
                {messagePie}</p>}

        </div>
    )
}

export default GameOver;
