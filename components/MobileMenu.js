"use client";

import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";
import { services } from '../data/siteContent';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    },

    {
        id: 2,
        title: 'Services',
        link: '/services',
        submenu: services.slice(0, 6).map((service, index) => ({
            id: 20 + index,
            title: service.title,
            link: `/services/${service.slug}`
        }))
    },
    {
        id: 3,
        title: 'Portfolio',
        link: '/portfolio',
    },
    {
        id: 4,
        title: 'Blog',
        link: '/blog',
    },
    {
        id: 5,
        title: 'Process',
        link: '/process',
    },
    {
        id: 6,
        title: 'About',
        link: '/about',
    },
    {
        id: 7,
        title: 'Contact',
        link: '/contact',
    }


]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    href={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        href={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;
