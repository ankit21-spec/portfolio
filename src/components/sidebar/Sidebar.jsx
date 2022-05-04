import React, { Component } from 'react';
import './sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { FiExternalLink } from 'react-icons/fi';
import me from '../images/me.jpeg'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div style={{ color: 'black', fontWeight: 'bold' }} className="tagtop"> # programmer_life </div>
            <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # hello_world </div>
            <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # coding </div>
            <h1><Link smooth to="/#start" className="h1_links">Ankit Sangwan</Link></h1>

            <img src={me} />
            <p style={{ color: 'black', fontWeight: 'bold' }} className="gmail"><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL" rel="opener noreferrer" target="_blank" className="fa fa-envelope"></a> ankit21spec@gmail.com </p>

            <ul className="sidebar-nav">
                <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
                <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interest</Link></li>
                {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
            </ul>

            <div className="flip-card-back">
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-icons"> <a href="https://github.com/ankit21-spec" rel="opener noreferrer" target="_blank" className="fa fas fa-github fa-lg"></a></li>
                    <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/ankit-sangwan-4388a119a/" rel="opener noreferrer" target="_blank" className="fa fas fa-linkedin fa-lg"></a></li>
                    <li className="sidebar-nav-icons"> <a href="https://twitter.com/whyanki" rel="opener noreferrer" target="_blank" className="fa fas fa-twitter fa-lg"></a></li>
                    <li className="sidebar-nav-icons"> <a href="https://www.instagram.com/u_know_ankit/" rel="opener noreferrer" target="_blank" className="fa fas fa-instagram fa-lg"></a></li>
                    <li className="sidebar-nav-icons"> <a href="mailto:ankit21spec@gmail.com" rel="opener noreferrer" target="_blank" className="fa fas fa-envelope fa-lg"></a></li>
                    <li className="sidebar-nav-icons"> <a href="https://www.facebook.com/EraZorA1st" rel="opener noreferrer" target="_blank" className="fa fas fa-facebook fa-lg"></a></li>
                </ul>
            </div>

        </div>
    )
}