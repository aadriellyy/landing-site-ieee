import React from "react";
import "../sections/Program.css";
import agenda_palestra from "../assets/agenda_palestra.svg";
import agenda_ia from "../assets/agenda_ia.svg";
import agenda_cyber from "../assets/agenda_cyber.svg";
import agenda_robo from "../assets/agenda_robotica.svg";

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
            </div>

            <hr class="border-t border-black"></hr>
        </section>

    );
};

export default Program;