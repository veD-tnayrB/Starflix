import React from 'react';
import BlockIcon from '@mui/icons-material/Block';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Input = ({ label, input, value, onChange, isCorrect, errorMessage }) => {
    
    return (
        <div className="input-container">
            <label htmlFor={input.name}>{label}</label>
            <div className="input">
                <input
                 type="text"
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
                isCorrect ||
                <span className="error-message">
                    {errorMessage}
                </span>
            }

        </div>
    )
}

export default Input;