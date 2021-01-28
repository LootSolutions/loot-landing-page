import React, { useState } from "react";
import "./style.scss";

const logo = require("../../../public/assets/icon/logo.png");

export default function Main() {
  const [highlighted, setHighlighted] = useState("home");
  return (
    <div id="topbar">
      <div id="name">
        <div>Loot</div>
      </div>
      <div id="links">
        <a
          href="#home"
          className={highlighted == "home" ? "clicked" : null}
          onClick={() => setHighlighted("home")}
        >
          Home
        </a>
        <a
          href="#why-view"
          className={highlighted == "why" ? "clicked" : null}
          onClick={() => setHighlighted("why")}
        >
          Why
        </a>
        <a
          href="#chain"
          className={highlighted == "chain" ? "clicked" : null}
          onClick={() => setHighlighted("chain")}
        >
          Chain
        </a>
        <a
          href="#studio"
          className={highlighted == "hub" ? "clicked" : null}
          onClick={() => setHighlighted("hub")}
        >
          Studio
        </a>
        <a
          href="#chest"
          className={highlighted == "wallet" ? "clicked" : null}
          onClick={() => setHighlighted("wallet")}
        >
          Chest
        </a>
        <a
          href="#api"
          className={highlighted == "api" ? "clicked" : null}
          onClick={() => setHighlighted("api")}
        >
          API
        </a>
      </div>
    </div>
  );
}
