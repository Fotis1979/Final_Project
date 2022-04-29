import React from 'react'
import { useEffect } from 'react'

const Counter = ({score, setScore, color, setColor, newQuestion}) => {

useEffect (() => {
  
  color === "green" && newQuestion===false && setScore((prev) => prev +10)
},[color])

return (
    <div className="Counter">

      <label>SCORE : </label>
      <span>{score}</span>
      
    </div>
  )
}

export default Counter
