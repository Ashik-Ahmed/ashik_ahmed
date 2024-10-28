import React from 'react';
import styles from './Button.module.css';

const Button = ({ label }) => {
    return (
        <button className={styles.button}>
            <span>{label}</span>
        </button>

    );
};

export default Button;