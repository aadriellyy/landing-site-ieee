import React from "react";
import "./TopInfoBar.css";
import foto_oficial from "../assets/geral.jpeg"

export default function TopInfoBar() {
  return (
    <div>
    <div className="top-bar">
      <div className="info-box">
        <span className="icon">📍</span>
        <p><strong>Universidade de Brasília - Campus Darcy Ribeiro</strong></p>
      </div>

      <div className="info-box">
        <p className="icon">⏰</p>
        <p><strong> Horário 8:30 às 17:00</strong></p>
      </div>

      <div className="info-box">
        <p className="icon">📧</p>
        <p><strong>meninas.comp.df@gmail.com</strong></p>
      </div>
    </div>

    <img src={foto_oficial} alt="Meninas.Comp" className="banner-img" />
  </div>
  );
}
