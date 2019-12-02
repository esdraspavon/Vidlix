import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-vidflix.png";
import userIcon from "../assets/static/user.png";

const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="user" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="/">Cuenta</a>
          <a href="/login/index.html">Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
