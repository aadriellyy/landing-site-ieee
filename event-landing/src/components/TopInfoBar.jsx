import React from "react";
import "./TopInfoBar.css";

export default function TopInfoBar() {
  return (
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
  );
}
