import React from "react";
import "./TopInfoBar.css";

export default function TopInfoBar() {
  return (
    <div className="top-bar">
        
      <div className="info-box">
        <span className="icon">📧</span>
        <span>meninas.comp.df@gmail.com</span>
      </div>

      <div className="info-box">
        <span className="icon">📍</span>
        <span>Universidade de Brasília - Campus Darcy Ribeiro, Brasília</span>
      </div>

      <div className="info-box">
        <span className="icon">⏰</span>
        <span>8:30 às 17:00</span>
      </div>
    </div>
  );
}
