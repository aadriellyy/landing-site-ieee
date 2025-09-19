import React from "react";
import "./Header.css";
import logo from "../assets/logo-header.svg";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <h2 className="logo">Girls.comp Day</h2>
                <ul className="nav-links">
                    <li><a href="/">Sobre</a></li>
                    <li><a href="#schedule">Programação</a></li>
                    <li><a href="/membros">Organização</a></li>
                    <li><a href="mailto:maristela.holanda@gmail.com">Contato</a></li>
                </ul>
                <div className="header-right">
                    <div className="logo-container">
                        <img src={logo} alt="Meninas.Comp" className="header-logo"/>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;