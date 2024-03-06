import React from "react";
import Logo from "../assets/Library.svg";
import { Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  function scrollToTop() {
    scroll.scrollToTop({
      duration: 300,
    });
  }

  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Logo} alt="" className="footer__logo--img" />
            </figure>
          </Link>

          <div className="footer__list">
            <Link to="/" className="footer__link" onClick={scrollToTop}>
              Home
            </Link>
            <span className="footer__link no-cursor">About</span>
            <Link to="/books" className="footer__link" onClick={scrollToTop}>
              Books
            </Link>
            <Link to="/cart" className="footer__link" onClick={scrollToTop}>
              Cart
            </Link>
          </div>
          <div className="footer__copyright">Copyright &copy; 2024 Library</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
