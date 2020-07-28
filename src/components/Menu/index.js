import React from "react";
// import ButtonLink from "./components/ButtonLink";
import Button from "../Button";
import Logo from "../../assets/img/logo.png";
import "./style.css";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="DaFlix logo" />
      </a>
      <Button as="a" href="/" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
