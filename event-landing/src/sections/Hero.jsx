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
                        <h1>Um dia com o Meninas.Comp</h1>
                        <p>Junte-se a nós para celebrar o Girls.Comp Day em um dia repleto de atividades!</p>
                        <div className="hero-buttons">
                            <button className="btn-primary"><a href="https://www.computer.org/membership/juniors">Sobre o IEEE CS Junior</a></button>
                            <button className="btn-secondary"><a href="https://www.computer.org/membership/juniors">Sobre o Meninas.Comp</a></button>
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