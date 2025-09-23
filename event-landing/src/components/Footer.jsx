import React from "react";
import "./Footer.css";
import logo from "../assets/logo-footer.png"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo Meninas.Comp" />
        </div>

        <div className="footer-info">
          <p>© 2025 <a href="https://www.linkedin.com/in/adrielly-lima-aa297a210">Adrielly Lima</a> e <a href="https://www.linkedin.com/in/anabraz26?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> Ana Caroline Braz </a> | Todos os direitos reservados</p>
          <div className="footer-links">
            <a href="mailto:maristela.holanda@gmail.com">📧 Contato</a>
            <a href="https://www.instagram.com" target="_blank" rel="https://www.instagram.com/meninas.comp/">📸 Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="https://www.linkedin.com/company/meninas-comp/posts/?feedView=all">💼 LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
