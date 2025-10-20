import React from "react";
import "../sections/Program.css";

const eventSchedule = [
  { time: "8:30 - 9:00", title: "Credenciamento com Café da Manhã", local: "Hall Inferior do Departamento de Ciência da Computação - UnB" },
  { time: "9:00 - 9:15", title: "Abertura", local: "Auditório do Departamento de Ciência da Computação - UnB" },
  { time: "9:15 - 10:00", title: "Painel: Alunas da Graduação - Os 6 cursos que envolvem Computação na UnB", local: "Auditório do Departamento de Ciência da Computação - UnB" },
  { time: "10:00 - 10:45", title: "Painel: Profissionais da Computação", local: "Auditório do Departamento de Ciência da Computação - UnB" },
  { time: "10:45 - 11:20", title: "Exposição de Projetos", local: "Hall Superior do Departamento de Ciência da Computação - UnB" },
  { time: "11:30 - 13:15", title: "Almoço", local: "Restaurante Universitário - UnB" },
  { time: "13:30 - 15:30", title: "Oficinas de robótica, segurança cibernética, Inteligência Artificial e Programação", local: "Laboratório de Informática da UnB (LINF)" },
  { time: "15:40 - 16:30", title: "Coffee-Break, Aniversário Meninas.comp e Encerramento", local: "Hall inferior do Departamento de Ciência da Computação - UnB" },
];

const Program = () => {
  return (
    <section className="program-section">
      <h2 className="program-title">Programação do Evento</h2>

      <div className="schedule-container">
        {eventSchedule.map((item, index) => (
          <div key={index} className="schedule-card">
            <div className="schedule-time">{item.time}</div>
            <div className="schedule-info">
              <p className="schedule-title">{item.title}</p>
              {item.local && <p className="schedule-local">{item.local}</p>}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Program;
