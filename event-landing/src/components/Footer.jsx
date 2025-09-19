import React from "react";
import "./Footer.css";
import logo from "../assets/logo-footer.svg"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo Meninas.Comp" />
        </div>

        <div className="footer-info">
          <p>© 2025 Adrielly Lima e Ana Caroline Braz | Todos os direitos reservados</p>
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
