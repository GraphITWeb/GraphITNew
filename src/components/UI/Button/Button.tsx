"use client";

import './Button.css';
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    href?: string;
    btnStyle?: React.CSSProperties;
    btnDivStyle?: React.CSSProperties;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
                                           label,
                                           onClick,
                                           href,
                                           btnStyle,
                                           btnDivStyle,
                                           disabled = false,
                                            type = 'button',
                                       }) => {
    const handleClick = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };

    const ButtonContent = (
        <button
            style={{ ...btnStyle }}
            className={`myBtn ${disabled ? 'disabled' : ''}`}
            onClick={handleClick}
            disabled={disabled}
            type={type}
        >
            <div style={{ ...btnDivStyle }} className="myBtn__label">
                {label}
            </div>
        </button>
    );

    if (href) {
        return (
            <Link href={href} className="button__href" passHref>
                {ButtonContent}
            </Link>
        );
    }

    return ButtonContent;
};

export default Button;

