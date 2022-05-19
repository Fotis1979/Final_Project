import React from 'react'
import x from '../../../src/assets/images/x.png'
import MyContext from "../.././context/MyContext"
import { useContext, useNavigate } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import "../../../src/styling/settings.css";


const GameOver = () => {


    const context = useContext(MyContext);
    const {

        setScore,
        setGameOver,
        storedScore,
    } = context;


    setScore(0)
    storedScore && setGameOver(true)

    return (
        <div>
            <Nav />
            <div className="gameOver">
                <img src={x} alt="Game_Over" />
                <p className="finalScore"> Your Final Score : {storedScore}</p>
            </div>
            <button className="play-btn"><Link to="/settings">PLAY AGAIN</Link></button>
        </div>
    )
}

export default GameOver;
