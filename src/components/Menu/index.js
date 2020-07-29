import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import Button from "../Button";
// import ButtonLink from "./components/ButtonLink";
import "./style.css";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="DaFlix logo" />
      </Link>
      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
