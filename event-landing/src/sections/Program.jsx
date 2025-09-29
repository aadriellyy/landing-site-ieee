import React from "react";
import "../sections/Program.css";
import agenda_palestra from "../assets/agendas/agenda_palestras.png";
import agenda_ia from "../assets/agendas/agenda_ia.png";
import agenda_cyber from "../assets/agendas/agenda_cyber.png";
import agenda_robo from "../assets/agendas/agenda_robo.png";
import agenda_proga from "../assets/agendas/agenda_proga.png";

const Program = () => {
    return(
        <section>
            <hr class="border-t border-black"></hr>
            <div className="event_program">
                <h2 className="tile">Programação do evento</h2>
            </div>  
            
            <div class="agenda-container">
                <img src={agenda_palestra} className="agenda" />
                <img src={agenda_ia} className="agenda" />
                <img src={agenda_cyber} className="agenda" />
                <img src={agenda_robo} className="agenda" />   
                <img src={agenda_proga} className="agenda" />                
            </div>

            <hr class="border-t border-black mt-20"></hr>
        </section>

    );
};

export default Program;