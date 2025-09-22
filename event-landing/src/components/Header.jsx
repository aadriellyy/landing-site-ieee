import React from "react";
import "./Header.css";
import logo from "../assets/logo-header.svg";
import { Link as RouterLink } from "react-router-dom";
import ScrollLink from "./ScrollLink";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <a className="logo" href="/">Girls.comp Day</a>
                <ul className="nav-links">
                    <li><ScrollLink to="sobre">Sobre</ScrollLink></li>
                    <li><ScrollLink to="programacao">Programação</ScrollLink></li>
                    <li><RouterLink to="/membros">Organização</RouterLink></li>
                    <li><ScrollLink to="escolas">Escolas</ScrollLink></li>
                    <li><a href="mailto:meninas.comp.df@gmail.com">Contato</a></li>
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
