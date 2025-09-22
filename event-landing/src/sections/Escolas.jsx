import React from "react";
import "./Escolas.css";

export default function ProgramsSection() {


    const apoiadores = [
      {
        title: "Professora Alba Cristina Magalhaes Alves de Melo",
        link: "https://cic.unb.br/professores/58-alves",
      },
      {
        title: "Professor Ricardo Pezzuol Jacobi",
        link: "https://www.cic.unb.br/professores/104-jacobi",
      },
      {
        title: "Professor João José Gondim",
        link:
          "https://www.escavador.com/sobre/2919439/joao-jose-costa-gondim",
      },
      {
        title: "Professor Marcelo Mandelli",
        link:
          "https://cic.unb.br/professores/91-mgmandelli",
      },
      {
        title: "Professora Genaina Nunes Rodrigues",
        link:
          "https://cic.unb.br/professores/79-genaina",
      },
      {
        title: "Professor Marcos Fagundes Caetano",
        link:
          "https://cic.unb.br/professores/94-mfcaetano",
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
              <button className="btn"><a href={member.link}>Saiba Mais</a></button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
