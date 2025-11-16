import React from "react";
import "./TopInfoBar.css";
import foto_oficial from "../assets/geral.jpeg"

export default function TopInfoBar() {
  return (
    <div>
    <div className="top-bar">
      <div className="info-box">
        <span className="icon">📍</span>
        <p>Universidade de Brasília - Campus Darcy Ribeiro</p>
      </div>

      <div className="info-box">
        <p className="icon">⏰</p>
        <p> Horário 8:30 às 17:00</p>
      </div>

      <div className="info-box">
        <p className="icon">📧</p>
        <p>meninas.comp.df@gmail.com</p>
      </div>
    </div>

    <img src={foto_oficial} alt="Meninas.Comp" className="banner-img" />
  </div>
  );
}
