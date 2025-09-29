import React from "react";
import "./Escolas.css";

export default function ProgramsSection() {


    const apoiadores = [
      {
        title: "CEM 310 Santa Maria",
      },
      {
        title: "Centro Educacional do Lago",
      },
      {
        title: "CED Vargem Bonita",
      },
      {
        title: "CDELAN",
      },
      {
        title: "CEM 111 Recanto das Emas",
      },
      {
        title: "CEM Paulo Freire",
      },
      {
        title: "CEF 102 Norte",
      },
      {
        title: "CEF 410 Norte",
      },
      {
        title: "Escola Municipal Francisco Alan - Planaltina",
      },
    ];

  return (
    <section className="members" id="members">
      
      <h2 className="members-title">Conheça as Escolas participantes</h2>
      <div className="apoiadores-grid">
        {apoiadores.map((member, index) => (
          <div className="apoiadores-card" key={index}>
            <div className="apoiadores-card-content">
              <h3>{member.title}</h3>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
