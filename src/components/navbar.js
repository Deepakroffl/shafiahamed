import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import ShafiAhamed from '../assets/images/shafiahamedlogo.png';
import { FaWhatsapp, FiLinkedin, FaInstagram } from "../assets/icons/vander";

export default function Navbar() {
  const [isOpen, setMenu] = useState(true);
  const [scroll, setScroll] = useState(false);

  // Wrap activateMenu in useCallback to prevent useEffect warning
  const activateMenu = useCallback(() => {
    const menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      let matchingMenuItem = null;
      for (let idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add('active');

        const immediateParent = getClosest(matchingMenuItem, 'li');
        if (immediateParent) immediateParent.classList.add('active');

        let parent = getClosest(immediateParent, '.child-menu-item') || getClosest(immediateParent, '.parent-menu-item');
        if (parent) {
          parent.classList.add('active');

          const parentMenuitem = parent.querySelector('.menu-item');
          if (parentMenuitem) parentMenuitem.classList.add('active');

          const parentOfParent = getClosest(parent, '.parent-parent-menu-item');
          if (parentOfParent) parentOfParent.classList.add('active');
        } else {
          const parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
          if (parentOfParent) parentOfParent.classList.add('active');
        }
      }
    }
  }, []);

  useEffect(() => {
    activateMenu();

    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activateMenu]);

  const getClosest = (elem, selector) => {
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          const matches = (this.document || this.ownerDocument).querySelectorAll(s);
          let i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  };

  const toggleMenu = () => {
    setMenu(!isOpen);
    const nav = document.getElementById("navigation");
    if (nav) {
      const anchorArray = Array.from(nav.getElementsByTagName("a"));
      anchorArray.forEach(element => {
        element.addEventListener('click', (e) => {
          const target = e.target.getAttribute("href");
          if (target !== "" && e.target.nextElementSibling) {
            const submenu = e.target.nextElementSibling.nextElementSibling;
            submenu?.classList.toggle('open');
          }
        });
      });
    }
  };

  return (
    <nav id="topnav" className={`${scroll ? "nav-sticky" : ""} defaultscroll is-sticky`}>
      <div className="container relative">
        <Link className="logo" to="/">
          <img src={ShafiAhamed} className="h-5 inline-block dark:hidden" alt="" />
          <img src={ShafiAhamed} className="h-5 hidden dark:inline-block" alt="" />
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
            <Link to="" className="h-8 w-8 inline-flex items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white">
              <FaWhatsapp className="h-[14px] w-[14px] align-middle" />
            </Link>
          </li>
          <li className="inline mb-0">
            <Link to="" className="h-8 w-8 inline-flex items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white">
              <FiLinkedin className="h-[14px] w-[14px] align-middle" />
            </Link>
          </li>
          <li className="inline mb-0">
            <Link to="" className="h-8 w-8 inline-flex items-center justify-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white">
              <FaInstagram className="h-[14px] w-[14px] align-middle" />
            </Link>
          </li>
        </ul>

        <div id="navigation" className={`${isOpen ? 'hidden' : 'block'}`}>
          <ul className="navigation-menu justify-end">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}