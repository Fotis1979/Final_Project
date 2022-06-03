import React from 'react'
import x from '../../../src/assets/images/x.png'
import pie3 from '../../assets/images/pie3.png'
import MyContext from "../.././context/MyContext"
import { useContext, useEffect } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import "../../../src/styling/settings.css";
import arrayRandomize from '../../hooks/arrayRandomize'

const GameOver = () => {

    const context = useContext(MyContext);
    const {
        messagePie,
        setMessagePie,
        messageDiamonds,
        setMessageDiamonds,
        img,
        setImg,
        imgPie,
        setImgPie,
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

    useEffect(() => {
        setCategories(arrayRandomize(categories))
        
        }, [setCategories])
    
    storedScore && setGameOver(true)


    // useEffect(() => {
    //     gameOver === false && setCategories(arrayRandomize(categories)) &&
    //     console.log(categories)

    //   }, []);

    useEffect(() => {
        gameOver === true ? setTimeout(() => {
            setMessageDiamonds(`U have won ${diamondPoints} DiamondPointS`)
        }, 5000) : setMessageDiamonds("")
     messageDiamonds &&   setTimeout(() => {
            storedScore < (score + diamondPoints)    &&  gameOver === true && setStoredScore(prev => (prev +1))
        }, 19);
       
    }, [gameOver,setStoredScore,diamondPoints,score,storedScore,setMessageDiamonds,messageDiamonds])


    useEffect(() => {
    pie === true ? setTimeout(() => {
            setMessagePie("Congrats' U CompleteD the Pie +199 PointS")
        }, 29000) : setMessagePie("")

      messagePie && storedScore < 1969 && setTimeout(() => {
            setStoredScore(prev => (prev + 1))
        }, 30)
    }, [storedScore,messagePie])

    return (
        <div>
            <Nav />
            {diamondPoints}
            <div className="gameOver">


                <p className="finalScore"> Your Final Score : {storedScore}</p>
                {pie === true ? <img className="popUp" src={pie3} alt="Game_Over" /> : <img src={x} alt="Game_Over" />}

            </div>
            {<p className="cat">
                
                {messageDiamonds}</p>}
            {pie === true && <p className="cat">
                
                {messagePie}</p>}


        </div>
    )
}

export default GameOver;
