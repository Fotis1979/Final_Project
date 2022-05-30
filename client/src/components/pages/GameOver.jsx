import React from 'react'
import x from '../../../src/assets/images/x.png'
import pie3 from '../../../src/assets/images/pie3.png'
import MyContext from "../.././context/MyContext"
import { useContext, useEffect } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import "../../../src/styling/settings.css";
import arrayRandomize from '../../hooks/arrayRandomize'

const GameOver = () => {

    const context = useContext(MyContext);
    const {

        categories,
        setCategories,
        setScore,
        storedScore,
        diamondPoints,
        pie,
        setGameOver,
        gameOver,
        indexCounter

    } = context;


    useEffect(() => {
            setCategories(arrayRandomize(categories).slice(4))
        console.log(categories);
    }, [])

    setScore(0)
    indexCounter === (prev => (prev + 1)) && console.log("GAMEOVER IS :", gameOver);
    storedScore  && console.log(gameOver);


    return (
        <div>
            <Nav />
            {diamondPoints}
            <div className="gameOver">
            {pie === true ? <img className="popUp" src={pie3} alt="Game_Over" /> : <img src={x} alt="Game_Over" />} 
                
                <p className="finalScore"> Your Final Score : {storedScore}</p>
            </div>
            <div className="again">
            <label>(Button doesn't work XXX)</label>
            <button className="play-btn"><Link to="/settings">PLAY AGAIN</Link></button>
            </div>
            {pie === true && <p className="cat">CONGRATS' !!!! U CoMpleTeD the PiE !!!</p>} 
            {pie === true && <p className="cat"> +199 Points !!!</p>} 

            
        </div>
    )
}

export default GameOver;
