import './Button.css';
import React from 'react';

interface ButtonProps {
    label: string;
    secondary?: boolean;
    onClick?: () => void;
    btnStyle?: React.CSSProperties;
    btnDivStyle?: React.CSSProperties;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, secondary, onClick, btnStyle,btnDivStyle, disabled }) => {
    return (
        <button
            style={{ ...btnStyle }}
            className={`myBtn ${secondary ? 'secondary' : ''} ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            <div style={{...btnDivStyle}} className="myBtn__label">{label}</div>
        </button>
    );
};

export default Button;