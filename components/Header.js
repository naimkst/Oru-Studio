import React, { useState } from 'react'
import Link from "next/link";
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const Header = (props) => {

    const [menuActive, setMenuState] = useState(false);
    const [rightActive, setRightState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header className={`header-area ${props.hclass}`}>
            <div id="header-sticky" className="menu-area">
                <div className="container">
                    <div className="second-menu">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-5">
                                <div className="logo">
                                    <Link onClick={ClickHandler} href="/home">
                                        <Image src={'/logo.png'} alt=""  width={200} height={20}/>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-1 col-1 text-right text-xl-right d-none d-lg-block">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul className="nav">
                                            <li className="has-submenu">
                                                <Link onClick={ClickHandler} href="/home" data-hover="Services">
                                                    <span className='main-text'>Services</span>
                                                </Link>
                                                <ul className="sub-menu">
                                                    <li><Link onClick={ClickHandler} href="/home">Services Page 01</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home-2">Services Page 02</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home-3">Services Page 03</Link></li>
                                                    <li><Link onClick={ClickHandler} href="/home-4">Services Page 04</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} href="/home" data-hover="Projects">
                                                    <span className='main-text'>Projects</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} href="/home" data-hover="Our Process">
                                                    <span className='main-text'>Our Process</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} href="/home" data-hover="open sourCe">
                                                    <span className='main-text'>open sourCe</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link onClick={ClickHandler} href="/home" data-hover="our blog">
                                                    <span className='main-text'>our blog</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-5 col-5 text-left">
                                <div className="header-area-right">
                                    <Link  href="/home" className='btn-style-1'>
                                        <span className='main-text'>Contact us</span>
                                        <span className='hover-text'>Contact us</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-1 col-2">
                                <MobileMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;