import React from "react";
import "./Hero.css";
// Importe a imagem que deseja usar no hero
import heroImage from "../assets/gif-hero.gif";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h3>Conheça as</h3>
                        <h1>Carreiras na Computação</h1>
                        <p>Participe do Girls.Comp Day com o Meninas.Comp e viva um dia cheio de experiências incríveis!</p>
                        <div className="hero-buttons">
                            <button className="btn-primary"><a href="https://www.computer.org/membership/juniors">Sobre o IEEE CS Junior</a></button>
                            <button className="btn-secondary"><a href="https://www.meninas.cic.unb.br/">Sobre o Meninas.Comp</a></button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src={heroImage} alt="Celebração Meninas.Comp" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;