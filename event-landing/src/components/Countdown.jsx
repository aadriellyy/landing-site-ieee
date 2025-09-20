import React, { useEffect, useState } from "react";
import "./Countdown.css";

const Countdown = () => {
    const eventDate = new Date("2025-10-21T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [eventDate]);

    return (
        <div className="countdown_div">
            <section className="countdown">
                <div><h2>{timeLeft.days}<p>Dias</p></h2></div>
                <div><h2>{timeLeft.hours}<p>Horas</p></h2></div>
                <div><h2>{timeLeft.minutes}<p>Minutos</p></h2></div>
                <div><h2>{timeLeft.seconds}<p>Segundos</p></h2></div>
            </section>
        </div>
    );
};

export default Countdown;