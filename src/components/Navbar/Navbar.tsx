"use client";
import './Navbar.css';
import React from "react";
import Link from "next/link";
import Button from "@/components/Button/Button";

const Navbar = () => {
    return (
        <nav>
                <div onClick={()=>window.location.href='/'} style={{cursor:'pointer'}}>
                    {/*<img style={{cursor:'pointer'}} width={48} height={48} src={logo} alt="Logo"/>*/}
                    <div className="nav__logo__text">GraphIT</div>
                </div>
                    <div className="flex flex-row gap-10">
                        <Link href='/what-we-do'>
                           <small> What We Do</small>
                        </Link>
                        <Link href='/who-we-are'>
                            <small>Who We Are</small>
                        </Link>
                        <Link href='/what-we-think'>
                            <small>What We Think</small>
                        </Link>
                        <Link href='/case-studies'>
                            <small>Case Studies</small>
                        </Link>
                    </div>
            <Button label='Contact Us'/>
        </nav>
    );
};

export default Navbar;