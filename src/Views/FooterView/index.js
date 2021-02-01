import React from "react";
import "./style.scss";

const polkadotSvg = require("../../../public/assets/svg/polkadot.svg");
const substrateSvg = require("../../../public/assets/svg/substrate.svg");
const encodeImg = require("../../../public/assets/image/encode.jpg");
const lootSvg = require("../../../public/assets/svg/Loot Logo.svg");

export default function Main() {
  return (
    <div id="footer">
      <div id="links">
        <a href="https://www.github.com/LootSolutions" target="_blank">
          Github
        </a>
        <a
          href="https://docs.google.com/document/d/1-0lHJqlAAkNKrWEkVoMh9r0hRiBVIeCCDPMDagFtnAE/edit?usp=sharing"
          target="_blank"
        >
          Whitepaper
        </a>
        <a
          href="https://app.swaggerhub.com/apis-docs/Loot5/NFTAPI/1.0.0"
          target="_blank"
        >
          API
        </a>
      </div>
      <div id="logos">
        <a href="https://polkadot.network" target="_blank">
          <img src={polkadotSvg} />
        </a>
        <a href="https://substrate.dev" target="_blank">
          <img src={substrateSvg} />
        </a>
        <a href="https://hack.encode.club" target="_blank">
          <img className="rounded-img" src={encodeImg} />
        </a>
        <img id="loot-logo" src={lootSvg} />
      </div>
      <div id="contact">
        <a href="mailto: loot.solutions@protonmail.com">Contact</a>
        <span>© 2020 Loot Solutions</span>
      </div>
    </div>
  );
}
