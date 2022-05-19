import React from 'react'
import "../../styling/errorMessage.css";

const ErrorMessage = ({ children }) => {
    return (
        <div className='e-message'>
            {children}
        </div>
    );

};

export default ErrorMessage