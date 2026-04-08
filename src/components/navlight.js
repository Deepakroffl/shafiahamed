import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";

import logoDark from '../assets/images/logo-dark.png'
import logoWhite from '../assets/images/logo-white.png'
import logolight from '../assets/images/logo-light.png'

import {FiDribbble, FiLinkedin, FiGithub} from "../assets/icons/vander"

export default function Navlight(){
    
    const [isOpen, setMenu] = useState(true);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        activateMenu();
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
        });
    }, []);
    
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
                    <span className="inline-block dark:hidden">
                        <img src={logoDark} className="h-5 l-dark" alt=""/>
                        <img src={logoWhite} className="h-5 l-light" alt=""/>
                    </span>
                    <img src={logolight} className="h-5 hidden dark:inline-block" alt=""/>
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
                        <Link to="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"><FiDribbble className="h-[14px] w-[14px] align-middle"/></Link>
                    </li>
                    <li className="inline mb-0">
                        <Link to="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"><FiLinkedin className="h-[14px] w-[14px] align-middle"/></Link>
                    </li>
                    <li className="inline mb-0">
                        <Link to="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"><FiGithub className="h-[14px] w-[14px] align-middle"/></Link>
                    </li>
                </ul>
               

                <div id="navigation" className={`${isOpen === true ? 'hidden' : 'block'}`}> 
                    <ul className="navigation-menu justify-end nav-light">
                        <li className="has-submenu parent-menu-item">
                            <Link to="#">Home</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/" className="sub-menu-item">Hero One</Link></li>
                                <li><Link to="/index-two" className="sub-menu-item">Hero Two</Link></li>
                                <li><Link to="/index-three" className="sub-menu-item">Hero Three</Link></li>
                            </ul>
                        </li>
                
                        <li><Link to="/aboutus" className="sub-menu-item">About Us</Link></li>

                        <li><Link to="/services" className="sub-menu-item">Services </Link></li>
                
                        <li className="has-submenu parent-parent-menu-item">
                            <Link to="#">Portfolio</Link><span className="menu-arrow"></span>
                            <ul className="submenu megamenu">
                                <li>
                                    <ul>
                                        <li className="megamenu-head">Modern Portfolio</li>
                                        <li><Link to="/portfolio-modern-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link to="/portfolio-modern-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link to="/portfolio-modern-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link to="/portfolio-modern-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link to="/portfolio-modern-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Classic Portfolio</li>
                                        <li><Link to="/portfolio-classic-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link to="/portfolio-classic-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link to="/portfolio-classic-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link to="/portfolio-classic-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link to="/portfolio-classic-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Creative Portfolio</li>
                                        <li><Link to="/portfolio-creative-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link to="/portfolio-creative-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link to="/portfolio-creative-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link to="/portfolio-creative-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link to="/portfolio-creative-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>
                
                                <li>
                                    <ul>
                                        <li className="megamenu-head">Masonry Portfolio</li>
                                        <li><Link to="/portfolio-masonry-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link to="/portfolio-masonry-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link to="/portfolio-masonry-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link to="/portfolio-masonry-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link to="/portfolio-masonry-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>
                
                                <li>
                                    <ul>
                                        <li className="megamenu-head">Portfolio Detail</li>
                                        <li><Link to="/portfolio-detail-one" className="sub-menu-item">Portfolio One</Link></li>
                                        <li><Link to="/portfolio-detail-two" className="sub-menu-item">Portfolio Two</Link></li>
                                        <li><Link to="/portfolio-detail-three" className="sub-menu-item">Portfolio Three</Link></li>
                                        <li><Link to="/portfolio-detail-four" className="sub-menu-item">Portfolio Four</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-menu-item">
                            <Link to="#">Blog</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link to="/blogs" className="sub-menu-item">Blogs</Link></li>
                                <li><Link to="/blog-detail" className="sub-menu-item">Blog Detail</Link></li>
                            </ul>
                        </li>
                
                        <li><Link to="/contactus" className="sub-menu-item">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}