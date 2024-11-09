"use client";
import './Navbar.css';
import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import Button from "@/components/Button/Button";

const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false)
    const dropdownRef = useRef<HTMLAnchorElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <nav>
            <div className="flex flex-row gap-3 align-middle items-center text-center" onClick={() => window.location.href = '/'} style={{cursor: 'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                    <path
                        d="M18.5014 5.90132C19.8959 5.90132 21.0263 4.7709 21.0263 3.37644C21.0263 1.98199 19.8959 0.851562 18.5014 0.851562C17.107 0.851562 15.9766 1.98199 15.9766 3.37644C15.9766 4.7709 17.107 5.90132 18.5014 5.90132Z"
                        fill="#FF0800"/>
                    <path
                        d="M18.5014 36.1513C19.8959 36.1513 21.0263 35.0209 21.0263 33.6264C21.0263 32.232 19.8959 31.1016 18.5014 31.1016C17.107 31.1016 15.9766 32.232 15.9766 33.6264C15.9766 35.0209 17.107 36.1513 18.5014 36.1513Z"
                        fill="#FF0800"/>
                    <path
                        d="M5.40183 28.4638C6.79629 28.4638 7.92671 27.3334 7.92671 25.9389C7.92671 24.5445 6.79629 23.4141 5.40183 23.4141C4.00738 23.4141 2.87695 24.5445 2.87695 25.9389C2.87695 27.3334 4.00738 28.4638 5.40183 28.4638Z"
                        fill="#FF0800"/>
                    <path
                        d="M5.40183 13.6552C6.79629 13.6552 7.92671 12.5248 7.92671 11.1303C7.92671 9.7359 6.79629 8.60547 5.40183 8.60547C4.00738 8.60547 2.87695 9.7359 2.87695 11.1303C2.87695 12.5248 4.00738 13.6552 5.40183 13.6552Z"
                        fill="#FF0800"/>
                    <path
                        d="M31.5991 28.4638C32.9936 28.4638 34.124 27.3334 34.124 25.9389C34.124 24.5445 32.9936 23.4141 31.5991 23.4141C30.2046 23.4141 29.0742 24.5445 29.0742 25.9389C29.0742 27.3334 30.2046 28.4638 31.5991 28.4638Z"
                        fill="#FF0800"/>
                    <path
                        d="M31.5991 13.6552C32.9936 13.6552 34.124 12.5248 34.124 11.1303C34.124 9.7359 32.9936 8.60547 31.5991 8.60547C30.2046 8.60547 29.0742 9.7359 29.0742 11.1303C29.0742 12.5248 30.2046 13.6552 31.5991 13.6552Z"
                        fill="#FF0800"/>
                    <path
                        d="M5.76913 18.4411C5.76913 14.8768 6.07401 11.8954 6.48212 11.1328H4.11523C4.55331 11.7045 4.88779 14.801 4.88779 18.5365C4.88779 22.272 4.55331 25.3686 4.11523 25.9402H6.68784C6.18057 25.9402 5.76913 22.5825 5.76913 18.4407V18.4411Z"
                        fill="#FF0800"/>
                    <path
                        d="M12.1851 29.4904C9.09819 27.7081 6.66877 25.9536 6.21256 25.2188L5.0293 27.2686C5.7434 27.1753 8.5924 28.4337 11.8277 30.3014C15.063 32.1692 17.5771 34.0074 17.8531 34.6723L19.1392 32.4445C18.8854 32.884 15.7722 31.5613 12.1851 29.4904Z"
                        fill="#FF0800"/>
                    <path
                        d="M12.2144 7.76779C9.12748 9.55008 6.69806 11.3046 6.24185 12.0394L5.05859 9.98964C5.77269 10.0829 8.62169 8.82451 11.857 6.95675C15.0923 5.08899 17.6064 3.25083 17.8824 2.58594L19.1685 4.81371C18.9147 4.37415 15.8015 5.6969 12.2144 7.76779Z"
                        fill="#FF0800"/>
                    <path
                        d="M31.1785 18.3473C31.1785 14.7831 30.8736 11.8016 30.4655 11.0391H32.8324C32.3943 11.6107 32.0598 14.7072 32.0598 18.4428C32.0598 22.1783 32.3943 25.2748 32.8324 25.8465H30.2598C30.767 25.8465 31.1785 22.4887 31.1785 18.3469V18.3473Z"
                        fill="#FF0800"/>
                    <path
                        d="M24.7647 29.3967C27.8516 27.6144 30.281 25.8598 30.7372 25.125L31.9205 27.1748C31.2064 27.0816 28.3574 28.3399 25.1221 30.2077C21.8868 32.0754 19.3727 33.9136 19.0967 34.5785L17.8105 32.3507C18.0644 32.7903 21.1775 31.4675 24.7647 29.3967Z"
                        fill="#FF0800"/>
                    <path
                        d="M24.7334 7.67404C27.8204 9.45633 30.2498 11.2109 30.706 11.9457L31.8892 9.89589C31.1751 9.98913 28.3261 8.73076 25.0909 6.863C21.8556 4.99524 19.3414 3.15708 19.0654 2.49219L17.7793 4.71996C18.0331 4.2804 21.1463 5.60315 24.7334 7.67404Z"
                        fill="#FF0800"/>
                </svg>
                <div className="nav__logo__text">GraphIT</div>
            </div>
            <div className="flex flex-row gap-10">
                <Link href='/what-we-do'>
                    <small> What We Do</small>
                </Link>
                <a ref={dropdownRef}>
                    <small onClick={() => setIsOpen(!isOpen)}>Who We Are </small>
                    <svg onClick={() => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                        <path
                            d="M10.332 10.9993L14.1654 7.16602L15.332 8.33268L10.332 13.3327L5.33203 8.33268L6.4987 7.16602L10.332 10.9993Z"
                            fill="white"/>
                    </svg>
                    {isOpen&&
                    <div className="navbar__open">
                        <Link href='/our-approach' onClick={()=>setIsOpen(false)}>
                            <small>Our Approach</small>
                        </Link>
                        <Link href='/our-values' onClick={()=>setIsOpen(false)}>
                            <small>Our Values</small>
                        </Link>
                        <Link href='/our-people' onClick={()=>setIsOpen(false)}>
                            <small>Our People</small>
                        </Link>
                    </div>
                    }
                </a>
                <Link href='/what-we-think'>
                    <small>What We Think</small>
                </Link>
                <Link href='/case-studies'>
                    <small>Case Studies</small>
                </Link>
            </div>
            <Button onClick={() => window.location.href = '/contact-us'} label='Contact Us'/>
        </nav>
    );
};

export default Navbar;