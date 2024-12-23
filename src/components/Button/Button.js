import React from 'react';
import './Button.css';

function Button({ label, className, disabled }) {
    return (
        <button className={`button ${className}`} disabled={disabled}>
            {label}
        </button>
    );
}

export default Button;
