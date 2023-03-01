import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link to="/" className="navbar-brand">
            {" "}
            <img
              className="icone"
              src="https://www.pngmart.com/files/22/Kurama-PNG-Isolated-Image.png"
              alt="Carregando..."
              style={{ width: "190px" }}
            />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/2" className="nav-link">Lorem</Link>
            </li>
            <li>
              <Link to="/3" className="nav-link">Ipsum</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}