import React, { useState,useEffect } from 'react'

const QuestionCounter = ({newQuestion, color}) => {
    const [qCount, setQCount] = useState(1)
    useEffect(() => {

    newQuestion && setQCount((prev) => (prev + 1))
    color && setQCount((prev) => (prev + 1))
        
    },[newQuestion, color]) 







    return (
        <div>
            <p className= "qCounter">
                Question Count {qCount}
            </p>
            
        </div>
    )
}

export default QuestionCounter
