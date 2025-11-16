import React from "react";
import "./AboutEvent.css";
import girlscomp from "../assets/brindes.jpeg"

export default function AboutEvent() {
  return (
    <section id="sobre" className="about-event">   

      <div className="about-text">
        <p className="subtitle">Um dia com o Meninas.Comp</p>

        <h1 className="title">
          Junte-se a nós para explorar todas as<br />
          <span className="highlight">Carreiras na Computação!</span>
        </h1>

        <p className="description">
           O evento tem como objetivo apresentar às meninas do ensino fundamental e médio, 
        além de outros estudantes interessados, as carreiras em engenharia da computação 
        e ciência da computação. Contaremos com oficinas práticas, atividades interativas, 
        passeios pelos laboratórios de informática e pelo Campus da Universidade de Brasília. 
        Todas as atividades serão conduzidas por mulheres inspiradoras que atuam na área de tecnologia.
        </p>
      </div>

      <img src={girlscomp} alt="Meninas.Comp" className="about-image" />

    </section>

  );
}
