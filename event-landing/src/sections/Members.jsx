import React from "react";
import "./Members.css";
import Carol from "../assets/ana-caroline.jpg";
import Luana from "../assets/luana.jpg";
import Maristela from "../assets/maristela.png";
import Aleteia from "../assets/aleteia.png";
import MariaEmilia from "../assets/maria-emilia.png";
import Adrielly from "../assets/adrielly.png";
import Carla from "../assets/carla.png";

export default function ProgramsSection() {
  const members = [
    {
      title: "Maristela Terto de Holanda",
      description:
        "Professora do Departamento de Ciência da Computação da Universidade de Brasília (UnB).",
      image: Maristela,  
    },
    {
      title: "Maria Emília Walter",
      description:
        "Professora do Departamento de Ciência da Computação da Universidade de Brasília (UnB).",
      image: MariaEmilia,
    },
    {
      title: "Aletéia Araújo",
      description:
        "Professora do Departamento de Ciência da Computação da Universidade de Brasília (UnB).",
      image: Aleteia,
    },
    {
      title: "Carla Maria Chaves e Cavalcante Koike",
      description:
        "Professora do Departamento de Ciência da Computação da Universidade de Brasília (UnB).",
      image: Carla,
    },
];

    const membersStudents = [
    {
      title: "Adrielly Lima",
      description:
        "Estudante de Graduação do Departamento de Ciência da Computação da Universidade de Brasília (UnB).",
      image: Adrielly,
      link: "https://www.linkedin.com/in/adrielly-lima-aa297a210",
    },
    {
      title: "Ana Caroline Braz",
      description:
        "Estudante de Mestrado do Departamento de Ciência da Computação da Universidade de Brasília (UnB).",
      image: Carol,
      link: "https://www.linkedin.com/in/anabraz26?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      title: "Luana Cruz",
      description:
        "Estudante de Graduação do Departamento de Ciência da Computação da Universidade de Brasília (UnB).",
      image: Luana,
      link: "https://www.linkedin.com/in/luana-cruz-a7410022b",
    },
  ];

  return (
    <section className="members" id="members">
      <h2 className="members-title">Conheça a Organização</h2>
      <p className="members-subtitle">
        Conheça a equipe responsável pela organização do evento.
      </p>
      <div className="members-grid">
        {members.map((member, index) => (
          <div className="member-card" key={index}>
            <img src={member.image} alt={member.title} />
            <div className="member-card-content">
              <h3>{member.title}</h3>
              <p>{member.description}</p>
              <button className="btn"><a href="https://cic.unb.br/">Saiba Mais</a></button>
            </div>
          </div>
        ))}
      </div>
      <br></br><br></br>
      <div className="membersStudents-grid">
        {membersStudents.map((member, index) => (
          <div className="memberStudents-card" key={index}>
            <img src={member.image} alt={member.title} />
            <div className="memberStudents-card-content">
              <h3>{member.title}</h3>
              <p>{member.description}</p>
              <button className="btn"><a href={member.link}>LinkedIn</a></button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
