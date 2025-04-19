import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const location = useLocation();

  const [activate, setActivate] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  const navToggler = () => {
    activate === "nav__menu"
      ? setActivate("nav__menu nav__active")
      : setActivate("nav__menu");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement?.scrollTop || 0;
      if (scrollTop > 0) {
        setActivate("nav__menu");
        setToggleIcon("nav__toggler");
      }

    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);

  return (
    <nav id="navbar" className="nav">
      <a href="#" className="brand">
        <h1 className="text-xl font-bold mb-4 md:mb-0">Pagina Web</h1>
      </a>
      <ul className={activate}>
        <li className="nav__item">
         
            <Link
              to="/"
              className={
                location.pathname === '/' ? 'text-yellow-300' : 'text-white'
              }
            >
              Home
            </Link>
       
        </li>
        <li className="nav__item">
       
            <Link
              to="/paginaprincipal"
              className={
                location.pathname === '/paginaprincipal'
                  ? 'text-yellow-300'
                  : 'text-white'
              }
            >
              Pagina Principal
            </Link>
         
        </li>
        <li className="nav__item">
        
            <Link
              to="/paginasecundaria"
              className={
                location.pathname === '/paginasecundaria'
                  ? 'text-yellow-300'
                  : 'text-white'
              }
            >
              Pagina Secundaria
            </Link>
      
        </li>
      </ul>
      <div onClick={navToggler} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default NavBar;