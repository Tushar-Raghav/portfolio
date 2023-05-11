import React from "react";
import { Link } from "react-router-dom";
import "./styles/overview.css";
import Logo from "../img/logo.svg";
import Experience from "./Experience";

function Overview() {
  return (
    <div id="overContainer">
      <div id="proPic">
        <img src={Logo} />
      </div>

      <div id="proDetails">
        <div id="proName">M S Dhoni</div>
        <div id="proBio">Captain of Indian Cricket Team</div>
      </div>

      <div id="navList">
        <Link id="navLink" to="">HOME</Link>

        <Link id="navLink" to="/About">ABOUT</Link>

        <Link id="navLink" to="/Skills">SKILLS</Link>
        
        <Link id="navLink" to="/Education">Education</Link>
        
        <Link id="navLink" to="/Experience">Experience</Link>
        
        <Link id="navLink" to="/Work">Work</Link>
        
        <Link id="navLink" to="/Contact">Contact</Link>
      </div>
    </div>
  );
}

export default Overview;
