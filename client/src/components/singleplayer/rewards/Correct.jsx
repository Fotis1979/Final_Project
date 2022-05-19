import React from 'react'
import MyContext from '../../../context/MyContext'
import { useContext } from 'react'


const Correct = () => {
    const context = useContext(MyContext);
    const {
        clicked,
        selected,
        indexCounter,
        rightAnswer,
        img,
        diff,
        streak,
        setStreak,
        message,
        setMessage
    } = context;


    switch (diff) {
        case "easy":
            setMessage("6")
            break;
        case "medium":
            setMessage("9")
            break;
        case "hard":
            setMessage("12")
            break;
        default: setMessage("")
    }
    clicked === false && setStreak(0)
    return (

        <div>
            {img}
            {selected === rightAnswer[indexCounter] && <p className="cat">{message} points !!!</p>}
            {streak === 3 && <p className="cat">CONGRATULATIONS 3 CORRECT IN A ROW + 20 POINtS !!!!</p>}
        </div>
    )
}

export default Correct
