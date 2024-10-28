import React from 'react';
import './Button.css';

const Button = ({ label }) => {
    return (
        <button>
            <span>{label}</span>
        </button>

    );
};

export default Button;