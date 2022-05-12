import React from 'react';

import BlockIcon from '@mui/icons-material/Block';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import './input.scss';

const Input = ({ label, input, value, onChange, isCorrect, errorMessage }) => {
    
    return (
        <div className="input-container">
            <label htmlFor={input.name}>{label}</label>
            <div 
             className="input"
             style={{
                border: `.2rem solid ${value !== '' && (isCorrect ? "#007e06" : "#c90202")}`
             }}
            >
                <input
                 type={input.type}
                 id={input.name}
                 name={input.name}
                 placeholder={input.placeholder}
                 value={value}
                 onChange={(e) => onChange(e)}
                />
            

            {
                value !== '' && (
                    isCorrect ?
                        <CheckCircleOutlineIcon
                         className="check-icon icon"
                        />
                        :
                        <BlockIcon 
                         className="block-icon icon" 
                        />       
                )
            }
            </div>

            {
                value !== '' && (
                    isCorrect ||
                    
                    <div className="error-container">
                        <span className="error-message">
                            {errorMessage}
                        </span>
                    </div>
                )
            }

        </div>
    )
}

export default Input;