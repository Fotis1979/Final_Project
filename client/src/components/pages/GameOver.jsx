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
        setStoredScore,
        storedScore,
        diamondPoints,
        pie,
        setGameOver,
        gameOver,
        indexCounter,
        pieImg, 
        setPieImg,
        score,
        diamondsScore,
        setDiamondsScore

    } = context;

storedScore && setGameOver(true)


    
    
    useEffect(() => {
      
pie === true && setPieImg(<img src={pie3} alt="pieImg"/> )
    }, [gameOver,diamondsScore,storedScore])



    return (
        <div>
            <Nav />
            {diamondPoints}
            <div className="gameOver">
                {pieImg}
            

                <p className="finalScore"> Your Final Score : {storedScore}</p>
            </div>
            
             
            {pie === true && <p className="cat">CONGRATS' !!!! U CoMpleTeD the PiE !!!</p>}
            {pie === true && <p className="cat"> +199 Points !!!</p>}


        </div>
    )
}

export default GameOver;
