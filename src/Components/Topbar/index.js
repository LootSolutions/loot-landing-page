import React from "react";
import "./style.scss";

const logo = require("../../../public/assets/icon/logo.png");

export default function Main() {
  return (
    <div id="topbar">
      <div id="name">
        <div>Loot</div>
      </div>
      <div id="links">
        <a id="home-button" href="#home" className="clicked">
          Home
        </a>
        <a id="why-view-button" href="#why-view">
          Why
        </a>
        <a id="chain-button" href="#chain">
          Chain
        </a>
        <a id="studio-button" href="#studio">
          Studio
        </a>
        <a id="chest-button" href="#chest">
          Chest
        </a>
        <a id="api-button" href="#api">
          API
        </a>
      </div>
    </div>
  );
}
