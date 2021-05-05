import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li>
            <a className="footer__nav-link" href="#">Корпоративным клиентам</a>
          </li>
          <li>
            <a className="footer__nav-link" href="#">Клиентам</a>
          </li>
          <li>
            <a className="footer__nav-link" href="#">Аренда авто</a>
          </li>
          <li>
            <a className="footer__nav-link" href="#">Каршеринг</a>
          </li>
          <li>
            <a className="footer__nav-link" href="#">Как продать авто</a>
          </li>
          <li>
            <a className="footer__nav-link" href="#">Trade-In</a>
          </li>
          <li>
            <a className="footer__nav-link" href="#">Test-drive</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

Footer.displayName = `Footer`;

export default Footer;
