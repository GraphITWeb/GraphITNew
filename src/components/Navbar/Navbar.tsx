"use client";
import './Navbar.css';
import React, {useEffect, useRef, useState} from "react";
import Link from "next/link";
import Button from "@/components/Button/Button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenMobile, setIsOpenMobile] = useState(false)
    const dropdownRef = useRef<HTMLAnchorElement>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
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
        <>
            <nav>
                <div className="flex flex-row gap-3 align-middle items-center text-center"
                     onClick={() => window.location.href = '/'} style={{cursor: 'pointer'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_5" data-name="Layer 5"
                         viewBox="-128.079 9.715 161.778 182.78" width={37}>
                        <path className="cls-2"
                              d="M 24.778 125.714 C 21.538 124.174 19.258 121.144 18.548 117.634 L 18.038 115.114 C 16.138 105.704 16.138 96.004 18.038 86.594 L 18.608 83.754 C 19.318 80.244 21.588 77.214 24.818 75.664 C 29.728 73.304 33.098 68.244 32.998 62.404 C 32.858 54.594 26.408 48.274 18.588 48.274 C 15.518 48.274 12.668 49.244 10.328 50.884 C 7.328 52.994 3.508 53.544 0.038 52.374 L -2.142 51.644 C -11.242 48.584 -19.642 43.734 -26.842 37.384 L -28.792 35.664 C -31.492 33.274 -32.922 29.764 -32.652 26.164 C -32.622 25.774 -32.612 25.384 -32.612 24.994 C -32.672 17.064 -39.232 10.624 -47.162 10.704 C -55.042 10.784 -61.412 17.204 -61.412 25.104 C -61.412 25.464 -61.402 25.814 -61.372 26.174 C -61.112 29.734 -62.472 33.224 -65.152 35.594 L -67.192 37.394 C -74.392 43.744 -82.792 48.594 -91.892 51.654 L -94.032 52.374 C -97.502 53.544 -101.312 52.994 -104.312 50.894 C -106.652 49.254 -109.502 48.294 -112.572 48.294 C -120.372 48.294 -126.812 54.604 -126.972 62.404 C -127.082 68.234 -123.732 73.294 -118.842 75.664 C -115.622 77.224 -113.362 80.254 -112.652 83.754 L -112.072 86.614 C -110.172 96.024 -110.172 105.724 -112.072 115.134 L -112.582 117.674 C -113.292 121.184 -115.562 124.214 -118.792 125.764 C -123.702 128.124 -127.072 133.184 -126.972 139.024 C -126.832 146.784 -120.462 153.084 -112.702 153.154 C -109.642 153.184 -106.802 152.254 -104.462 150.654 C -101.502 148.624 -97.742 148.134 -94.342 149.274 L -91.902 150.094 C -82.802 153.154 -74.402 158.004 -67.202 164.354 L -65.212 166.114 C -62.452 168.554 -61.032 172.164 -61.362 175.844 C -61.412 176.344 -61.432 176.854 -61.422 177.364 C -61.312 185.124 -54.982 191.454 -47.222 191.564 C -39.182 191.674 -32.632 185.184 -32.632 177.164 C -32.632 176.704 -32.652 176.254 -32.692 175.804 C -33.032 172.144 -31.592 168.554 -28.842 166.124 L -26.852 164.364 C -19.652 158.014 -11.252 153.164 -2.152 150.104 L 0.328 149.274 C 3.738 148.124 7.498 148.624 10.458 150.664 C 12.798 152.264 15.638 153.194 18.698 153.174 C 26.468 153.114 32.848 146.804 32.978 139.024 C 33.078 133.174 29.688 128.104 24.758 125.764 L 24.778 125.714 Z M -57.452 156.184 L -89.662 137.594 C -95.442 134.254 -100.172 126.064 -100.172 119.394 L -100.172 82.204 C -100.172 74.754 -96.202 67.874 -89.742 64.144 L -57.452 45.504 C -51.002 41.784 -43.052 41.784 -36.602 45.504 L -4.312 64.144 C 2.138 67.864 6.118 74.754 6.118 82.204 L 6.118 119.484 C 6.118 126.934 2.148 133.814 -4.312 137.544 L -36.602 156.184 C -43.052 159.904 -51.002 159.904 -57.452 156.184 Z"/>
                    </svg>
                    <div className="nav__logo__text">GraphIT</div>
                </div>
                <div className="flex flex-row gap-10 navbar__pc">
                    <Link href='/what-we-do'>
                        <small> What We Do</small>
                    </Link>
                    <a ref={dropdownRef}>
                        <small style={{cursor: "pointer"}} onClick={() => setIsOpen(!isOpen)}>Who We Are </small>
                        <svg style={{cursor: "pointer"}} onClick={() => setIsOpen(!isOpen)}
                             className={`${isOpen ? 'svgOpen' : ''} `}
                             xmlns="http://www.w3.org/2000/svg" width="21" height="21"
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
                <div className="navbar__right">
                    {mobileOpen ?
                        <svg onClick={() => setMobileOpen(false)} xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none">
                            <path
                                d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                                fill="white"/>
                        </svg> :
                        <svg onClick={() => setMobileOpen(true)} xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="white"/>
                        </svg>}
                    <Button onClick={() => window.location.href = '/contact-us'} label='Contact Us'/>
                </div>
            </nav>
            {mobileOpen &&
                <div className="navbar__mobile">
                    <div className="navbar__mobile__div__first">
                        <div className="navbar__mobile__div__first__header"  onClick={() => {
                            setIsOpenMobile(!isOpenMobile)
                        }}>
                            <h4>
                                Who we are
                            </h4>
                            <svg
                                 className={`${isOpenMobile ? '' : 'svgOpen'} `}
                                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none">
                                <path d="M12 10.8L7.4 15.4L6 14L12 8L18 14L16.6 15.4L12 10.8Z" fill="white"/>
                            </svg>
                        </div>
                        {isOpenMobile&&<>
                            <div className="navbar__mobile__div__first__block"
                                 onClick={() => window.location.href = '/our-approach'}>
                                <div className="our__vision__svg">
                                <div className="our__vision__svg__small" style={{width:40,height:40}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                                         fill="none">
                                        <path
                                            d="M14.8614 2.16699H5.13921C3.22463 2.16699 1.66699 3.72463 1.66699 5.63921V15.3614C1.66699 17.276 3.22463 18.8337 5.13921 18.8337H14.8614C16.776 18.8337 18.3337 17.276 18.3337 15.3614V5.63921C18.3337 3.72463 16.776 2.16699 14.8614 2.16699ZM16.9448 15.3614C16.9448 16.51 16.01 17.4448 14.8614 17.4448H5.13921C3.9906 17.4448 3.05588 16.51 3.05588 15.3614V5.63921C3.05588 5.39477 3.10588 5.16283 3.18366 4.94477H16.817C16.8948 5.16283 16.9448 5.39477 16.9448 5.63921V15.3614ZM4.44477 7.72255C4.44477 7.33921 4.75519 7.0281 5.13921 7.0281H7.22255C7.60658 7.0281 7.91699 7.33921 7.91699 7.72255C7.91699 8.10588 7.60658 8.41699 7.22255 8.41699H5.13921C4.75519 8.41699 4.44477 8.10588 4.44477 7.72255ZM11.3892 11.1948C11.3892 11.5788 11.0788 11.8892 10.6948 11.8892H6.5281C6.14408 11.8892 5.83366 11.5788 5.83366 11.1948C5.83366 10.8107 6.14408 10.5003 6.5281 10.5003H10.6948C11.0788 10.5003 11.3892 10.8114 11.3892 11.1948ZM11.3892 14.667C11.3892 15.051 11.0788 15.3614 10.6948 15.3614H5.13921C4.75519 15.3614 4.44477 15.051 4.44477 14.667C4.44477 14.283 4.75519 13.9725 5.13921 13.9725H10.6948C11.0788 13.9725 11.3892 14.283 11.3892 14.667ZM15.5559 14.667C15.5559 15.4344 14.9344 16.0559 14.167 16.0559C13.3996 16.0559 12.7781 15.4344 12.7781 14.667C12.7781 14.1545 13.0594 13.7114 13.4725 13.4705V9.11144C13.4725 8.7288 13.1614 8.41699 12.7781 8.41699H11.8913C11.651 8.83019 11.208 9.11144 10.6948 9.11144C9.92741 9.11144 9.30588 8.48991 9.30588 7.72255C9.30588 6.95519 9.92741 6.33366 10.6948 6.33366C11.2073 6.33366 11.6503 6.61491 11.8913 7.0281H12.7781C13.9267 7.0281 14.8614 7.96283 14.8614 9.11144V13.4705C15.2746 13.7107 15.5559 14.1538 15.5559 14.667Z"
                                            fill="#F23704"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="navbar__mobile__div__first__block__small">
                                <h5>Our approach</h5>
                                <small>Lorem ipsum</small>
                            </div>
                        </div>
                            <div className="navbar__mobile__div__first__block"
                                 onClick={() => window.location.href = '/our-values'}>
                                <div className="our__vision__svg">
                                <div className="our__vision__svg__small" style={{width: 40, height: 40}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                                         fill="none">
                                        <path
                                            d="M13.4172 3L14.347 4.71857L16.0903 5.63514L14.347 6.5517L13.4172 8.27027L12.4874 6.5517L10.744 5.63514L12.4874 4.71857L13.4172 3ZM7.07207 5.17181L8.95208 8.64671L12.4771 10.5L8.95208 12.3533L7.07207 15.8282L5.19204 12.3533L1.66699 10.5L5.19204 8.64671L7.07207 5.17181ZM15.2972 13.5116L14.1222 11.3398L12.9472 13.5116L10.744 14.6699L12.9472 15.8282L14.1222 18L15.2972 15.8282L17.5003 14.6699L15.2972 13.5116Z"
                                            fill="#F23704"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="navbar__mobile__div__first__block__small">
                                <h5>Our values</h5>
                                <small>Lorem ipsum</small>
                            </div>
                        </div>
                        <div className="navbar__mobile__div__first__block" onClick={()=>window.location.href='/our-people'}>
                            <div className="our__vision__svg">
                                <div className="our__vision__svg__small" style={{width: 40, height: 40}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                                         fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                              d="M12.7319 9.79812C12.0467 10.256 11.2411 10.5003 10.417 10.5003C9.31226 10.4992 8.25309 10.0599 7.47193 9.27872C6.69077 8.49756 6.25143 7.43839 6.25033 6.33366C6.25033 5.50957 6.4947 4.70399 6.95254 4.01878C7.41037 3.33358 8.06112 2.79953 8.82248 2.48416C9.58384 2.1688 10.4216 2.08628 11.2299 2.24706C12.0381 2.40783 12.7806 2.80466 13.3633 3.38738C13.946 3.9701 14.3428 4.71253 14.5036 5.52078C14.6644 6.32904 14.5819 7.16682 14.2665 7.92817C13.9511 8.68953 13.4171 9.34028 12.7319 9.79812ZM11.9602 4.02402C11.5034 3.7188 10.9664 3.55588 10.417 3.55588C9.68028 3.55588 8.97374 3.84854 8.45281 4.36948C7.93187 4.89041 7.63921 5.59695 7.63921 6.33366C7.63921 6.88305 7.80213 7.42011 8.10735 7.87691C8.41258 8.33371 8.84641 8.68975 9.35398 8.89999C9.86155 9.11024 10.4201 9.16525 10.9589 9.05806C11.4977 8.95088 11.9927 8.68633 12.3812 8.29785C12.7697 7.90937 13.0342 7.41441 13.1414 6.87558C13.2486 6.33674 13.1936 5.77822 12.9833 5.27065C12.7731 4.76308 12.417 4.32925 11.9602 4.02402ZM5.9996 13.7218C7.17131 12.5501 8.75995 11.8911 10.417 11.8892C12.074 11.8911 13.6627 12.5501 14.8344 13.7218C16.0061 14.8935 16.6652 16.4822 16.667 18.1392C16.667 18.3234 16.5938 18.5 16.4636 18.6303C16.3334 18.7605 16.1567 18.8337 15.9725 18.8337C15.7884 18.8337 15.6117 18.7605 15.4815 18.6303C15.3513 18.5 15.2781 18.3234 15.2781 18.1392C15.2781 16.85 14.766 15.6135 13.8543 14.7019C12.9427 13.7903 11.7062 13.2781 10.417 13.2781C9.12775 13.2781 7.8913 13.7903 6.97967 14.7019C6.06803 15.6135 5.55588 16.85 5.55588 18.1392C5.55588 18.3234 5.48272 18.5 5.35248 18.6303C5.22225 18.7605 5.04561 18.8337 4.86144 18.8337C4.67726 18.8337 4.50062 18.7605 4.37039 18.6303C4.24016 18.5 4.16699 18.3234 4.16699 18.1392C4.16883 16.4822 4.8279 14.8935 5.9996 13.7218Z"
                                              fill="#F23704"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="navbar__mobile__div__first__block__small">
                                <h5>Our people</h5>
                                <small>Lorem ipsum</small>
                            </div>
                        </div>
                        </>}
                    </div>
                    <div className="navbar__mobile__div"  onClick={() => window.location.href = '/what-we-do'}>
                        <h4>
                            What we do
                        </h4>
                    </div>
                    <div className="navbar__mobile__div"  onClick={() => window.location.href = '/what-we-think'}>
                        <h4>
                            What we think
                        </h4>
                    </div>
                    <div className="navbar__mobile__div"  onClick={() => window.location.href = '/case-studies'}>
                        <h4>
                            Case studies
                        </h4>
                    </div>
                </div>
            }
        </>

    );
};

export default Navbar;