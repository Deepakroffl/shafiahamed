import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";

import ShafiAhamed from '../assets/images/shafiahamedlogo.png'

import {FaWhatsapp, FiLinkedin, FaInstagram} from "../assets/icons/vander"

export default function Navbar(){
    
    const [isOpen, setMenu] = useState(true);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        activateMenu();
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
        });
    }, [activateMenu]);
    
    const getClosest = (elem, selector) => {

        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) { }
                    return i > -1;
                };
        }

        // Get the closest matching element
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }
        return null;

    };

    const activateMenu = () => {
        var menuItems = document.getElementsByClassName("sub-menu-item");
        if (menuItems) {

            var matchingMenuItem = null;
            for (var idx = 0; idx < menuItems.length; idx++) {
                if (menuItems[idx].href === window.location.href) {
                    matchingMenuItem = menuItems[idx];
                }
            }

            if (matchingMenuItem) {
                matchingMenuItem.classList.add('active');


                var immediateParent = getClosest(matchingMenuItem, 'li');

                if (immediateParent) {
                    immediateParent.classList.add('active');
                }

                var parent = getClosest(immediateParent, '.child-menu-item');
                if (parent) {
                    parent.classList.add('active');
                }

                var parent = getClosest(parent || immediateParent, '.parent-menu-item');

                if (parent) {
                    parent.classList.add('active');

                    var parentMenuitem = parent.querySelector('.menu-item');
                    if (parentMenuitem) {
                        parentMenuitem.classList.add('active');
                    }

                    var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                } else {
                    var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                }
            }
        }
    }
    const toggleMenu = () => {
        setMenu(!isOpen)
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    }
    return(
        <>
        <nav id="topnav" className={`${scroll ? "nav-sticky" : ""} defaultscroll is-sticky`}>
            <div className="container relative">
                <Link className="logo" to="/">
                    <img src={ShafiAhamed} className="h-5 inline-block dark:hidden" alt=""/>
                    <img src={ShafiAhamed} className="h-5 hidden dark:inline-block" alt=""/>
                </Link>
                <div className="menu-extras">
                    <div className="menu-item">
                        <Link to="" className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>
                <ul className="buy-button list-none mb-0 space-x-1">
                    <li className="inline mb-0">
                        <Link to="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"><FaWhatsapp className="h-[14px] w-[14px] align-middle"/></Link>
                    </li>
                    <li className="inline mb-0">
                        <Link to="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"><FiLinkedin className="h-[14px] w-[14px] align-middle"/></Link>
                    </li>
                    <li className="inline mb-0">
                        <Link to="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"><FaInstagram className="h-[14px] w-[14px] align-middle"/></Link>
                    </li>
                </ul>
               

                <div id="navigation" className={`${isOpen === true ? 'hidden' : 'block'}`}> 
                    <ul className="navigation-menu justify-end">
                        <li><a href="#home" >Home</a></li>
                
                        <li><a href="#about">About Us</a></li>

                        <li><a href="#services"  >Services </a></li>

                        <li><a href="#portfolio"  >Portfolio </a></li>
                
                        <li><a href="#blog"  >Blog </a></li>
                
                        <li><a href="#contact" >Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}