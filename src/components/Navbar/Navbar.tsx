"use client";
import './Navbar.css';
import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import Button from "@/components/Button/Button";
import useMobile from "@/hooks/useMobile";

const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false)
    const dropdownRef = useRef<HTMLAnchorElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };
    const isMobile=useMobile(768)

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <nav>
            <div className="flex flex-row gap-3 align-middle items-center text-center"
                 onClick={() => window.location.href = '/'} style={{cursor: 'pointer'}}>
                <svg  xmlns="http://www.w3.org/2000/svg" id="Layer_5" data-name="Layer 5"
                     viewBox="-128.079 9.715 161.778 182.78" width={37}>
                    <path className="cls-2"
                          d="M 24.778 125.714 C 21.538 124.174 19.258 121.144 18.548 117.634 L 18.038 115.114 C 16.138 105.704 16.138 96.004 18.038 86.594 L 18.608 83.754 C 19.318 80.244 21.588 77.214 24.818 75.664 C 29.728 73.304 33.098 68.244 32.998 62.404 C 32.858 54.594 26.408 48.274 18.588 48.274 C 15.518 48.274 12.668 49.244 10.328 50.884 C 7.328 52.994 3.508 53.544 0.038 52.374 L -2.142 51.644 C -11.242 48.584 -19.642 43.734 -26.842 37.384 L -28.792 35.664 C -31.492 33.274 -32.922 29.764 -32.652 26.164 C -32.622 25.774 -32.612 25.384 -32.612 24.994 C -32.672 17.064 -39.232 10.624 -47.162 10.704 C -55.042 10.784 -61.412 17.204 -61.412 25.104 C -61.412 25.464 -61.402 25.814 -61.372 26.174 C -61.112 29.734 -62.472 33.224 -65.152 35.594 L -67.192 37.394 C -74.392 43.744 -82.792 48.594 -91.892 51.654 L -94.032 52.374 C -97.502 53.544 -101.312 52.994 -104.312 50.894 C -106.652 49.254 -109.502 48.294 -112.572 48.294 C -120.372 48.294 -126.812 54.604 -126.972 62.404 C -127.082 68.234 -123.732 73.294 -118.842 75.664 C -115.622 77.224 -113.362 80.254 -112.652 83.754 L -112.072 86.614 C -110.172 96.024 -110.172 105.724 -112.072 115.134 L -112.582 117.674 C -113.292 121.184 -115.562 124.214 -118.792 125.764 C -123.702 128.124 -127.072 133.184 -126.972 139.024 C -126.832 146.784 -120.462 153.084 -112.702 153.154 C -109.642 153.184 -106.802 152.254 -104.462 150.654 C -101.502 148.624 -97.742 148.134 -94.342 149.274 L -91.902 150.094 C -82.802 153.154 -74.402 158.004 -67.202 164.354 L -65.212 166.114 C -62.452 168.554 -61.032 172.164 -61.362 175.844 C -61.412 176.344 -61.432 176.854 -61.422 177.364 C -61.312 185.124 -54.982 191.454 -47.222 191.564 C -39.182 191.674 -32.632 185.184 -32.632 177.164 C -32.632 176.704 -32.652 176.254 -32.692 175.804 C -33.032 172.144 -31.592 168.554 -28.842 166.124 L -26.852 164.364 C -19.652 158.014 -11.252 153.164 -2.152 150.104 L 0.328 149.274 C 3.738 148.124 7.498 148.624 10.458 150.664 C 12.798 152.264 15.638 153.194 18.698 153.174 C 26.468 153.114 32.848 146.804 32.978 139.024 C 33.078 133.174 29.688 128.104 24.758 125.764 L 24.778 125.714 Z M -57.452 156.184 L -89.662 137.594 C -95.442 134.254 -100.172 126.064 -100.172 119.394 L -100.172 82.204 C -100.172 74.754 -96.202 67.874 -89.742 64.144 L -57.452 45.504 C -51.002 41.784 -43.052 41.784 -36.602 45.504 L -4.312 64.144 C 2.138 67.864 6.118 74.754 6.118 82.204 L 6.118 119.484 C 6.118 126.934 2.148 133.814 -4.312 137.544 L -36.602 156.184 C -43.052 159.904 -51.002 159.904 -57.452 156.184 Z"/>
                </svg>
                <div className="nav__logo__text">GraphIT</div>
            </div>
            {!isMobile&&
            <div className="flex flex-row gap-10">
                <Link href='/what-we-do'>
                    <small> What We Do</small>
                </Link>
                <a ref={dropdownRef}>
                    <small onClick={() => setIsOpen(!isOpen)}>Who We Are </small>
                    <svg onClick={() => setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                         viewBox="0 0 21 21" fill="none">
                        <path
                            d="M10.332 10.9993L14.1654 7.16602L15.332 8.33268L10.332 13.3327L5.33203 8.33268L6.4987 7.16602L10.332 10.9993Z"
                            fill="white"/>
                    </svg>
                    {isOpen &&
                        <div className="navbar__open">
                            <Link href='/our-approach' onClick={() => setIsOpen(false)}>
                                <small>Our Approach</small>
                            </Link>
                            <Link href='/our-values' onClick={() => setIsOpen(false)}>
                                <small>Our Values</small>
                            </Link>
                            <Link href='/our-people' onClick={() => setIsOpen(false)}>
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
            }
            {isMobile? <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="white"/>
                    </svg>
                </> :
                <Button onClick={() => window.location.href = '/contact-us'} label='Contact Us'/>
            }
        </nav>
    );
};

export default Navbar;