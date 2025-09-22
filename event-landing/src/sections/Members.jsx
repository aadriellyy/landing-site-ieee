import React from "react";
import "./Members.css";
import Carol from "../assets/ana-caroline.jpg";
import Luana from "../assets/luana.jpg";
import Maristela from "../assets/maristela.png";
import Aleteia from "../assets/aleteia.png";
import MariaEmilia from "../assets/maria-emilia.png";
import Adrielly from "../assets/adrielly.png";
import Carla from "../assets/carla.png";
import Bianca from "../assets/Bianca.jpg";
import Sabrina from "../assets/Sabrina.jpg";
import Lidia from "../assets/Lidia.png";
import AnaClara from "../assets/Ana-Clara-Borges.jpg";
import Camille from "../assets/camille.webp";
import Laryssa from "../assets/Laryssa_Ferreira.jpeg";
import Cecilia from "../assets/Maria_Cecilia.jpg";
import Natalia from "../assets/Natalia.jpg";
import Samara from "../assets/samara.JPG";
import Daniely from "../assets/daniely.png";
import Julia from "../assets/julia.png";

export default function ProgramsSection() {

  const members = [
    {
      title: "Maristela Holanda",
      description:
        "Organizadora Geral.\nProfessora do Departamento de Ciência da Computação da Universidade de Brasília (UnB).",
      image: Maristela,  
      refName: "Entre em Contato"
    },
    {
      title: "Maria Emília Walter",
      description:
        "Professora do Departamento de Ciência da Computação da Universidade de Brasília (UnB).",
      image: MariaEmilia,
      refName: "Saiba Mais"
    },
    {
      title: "Aletéia Araújo",
      description:
        "Professora do Departamento de Ciência da Computação da Universidade de Brasília (UnB).",
      image: Aleteia,
      refName: "Saiba Mais"
    },
    {
      title: "Carla Koike",
      description:
        "Professora do Departamento de Ciência da Computação da Universidade de Brasília (UnB).",
      image: Carla,
      refName: "Saiba Mais"
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


    const membersVoluntarias = [
    {
      title: "Bianca Patrocínio",
      description:
        "Estudante de Engenhearia de Software na Universidade de Brasília (UnB).",
      image: Bianca,
      link: "https://www.linkedin.com/in/biancapatrocinio/",
    },
    {
      title: "Sabrina Barcelos",
      description:
        "Estudante de Ciência da Computação na Universidade de Brasília (UnB).",
      image: Sabrina,
      link: "https://www.linkedin.com/in/sabrina-barcelos-503150256/",
    },
    {
      title: "Lídia Alves",
      description:
        "Estudante de Licenciatura em Computação na Universidade de Brasília (UnB).",
      image: Lidia,
      link: "https://www.linkedin.com/in/l%C3%ADdia-silveira?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      title: "Ana Clara Borges",
      description:
        "Estudante de Engenharia de Software na Universidade de Brasília (UnB).",
      image: AnaClara,
      link: "https://www.linkedin.com/in/anacbborges/",
    },
    {
      title: "Camille Barbosa",
      description:
        "Estudante de Licenciatura em Computação na Universidade de Brasília (UnB).",
      image: Camille,
      link: "https://www.linkedin.com/in/camille-barbosa-a5440b34b",
    },
    {
      title: "Laryssa Ferreira",
      description:
        "Estudante de Engenharia da Computação na Universidade de Brasília (UnB).",
      image: Laryssa,
      link: "https://www.linkedin.com/in/laryssaoliferreira/",
    },
    {
      title: "Natalia Leal",
      description:
        "Estudante de Engenharia da Computação na Universidade de Brasília (UnB).",
      image: Natalia,
      link: "https://www.linkedin.com/in/natalia-leal-dos-santos-4644a42ba/",
    },
    {
      title: "Maria Cecília",
      description:
        "Estudante de Licenciatira em Computação na Universidade de Brasília (UnB).",
      image: Cecilia,
      link: "https://www.linkedin.com/in/mariaceciliagomeslopes/",
    },
    {
      title: "Samara Gomes",
      description:
        "Estudante de Engenharia da Computação na Universidade de Brasília (UnB).",
      image: Samara,
      link: "https://www.linkedin.com/in/mariaceciliagomeslopes/",
    },
    {
      title: "Danielly Reis",
      description:
        "Estudante de Engenharia Mecatrônica na Universidade de Brasília (UnB).",
      image: Daniely,
      link: "https://www.linkedin.com/in/daniellyreis",
    },
    {
      title: "Júlia Peghini",
      description:
        "Estudante de Tecnologia em Sistemas para Internet no Instituto Federal de Brasília (IFB).",
      image: Julia,
      link: "https://www.linkedin.com/in/j%C3%BAlia-peghini?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
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
              <button className="btn"><a href="https://cic.unb.br/">{member.refName}</a></button>
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


      <br></br><br></br>
      <h2 className="members-title">Conheça as Voluntárias</h2>
      <p className="members-subtitle">
        Conheça a equipe responsável por tornar o evento possível.
      </p>
      <div className="membersVoluntarias-grid">
        {membersVoluntarias.map((member, index) => (
          <div className="memberVoluntarias-card" key={index}>
            <img src={member.image} alt={member.title} />
            <div className="memberVoluntarias-card-content">
              <h3>{member.title}</h3>
              <p>{member.description}</p>
              <button className="btn"><a href={member.link}>LinkedIn</a></button>
            </div>
          </div>
        ))}
      </div>


      <br></br><br></br>
      <h2 className="members-title">Conheça os Apoiadores</h2>
      <p className="members-subtitle">
        Conheça os professores que cooperaram com essa iniciativa.
      </p>
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
