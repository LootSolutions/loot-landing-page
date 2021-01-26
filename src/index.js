import React from "react";
import ReactDOM from "react-dom";
import Page from "./Components/Page";

const bullets = require("./bullets.json");

const sparkleSvg = require("../public/assets/svg/sparkle.svg");
const coinSvg = require("../public/assets/svg/coin.svg");
const diamondSvg = require("../public/assets/svg/gem.svg");
const treasureSvg = require("../public/assets/svg/treasure.svg");

function addBackground() {
  const numElements = 100;
  const backgroundDiv = document.getElementById("background");

  let svgs = [sparkleSvg, coinSvg, diamondSvg, treasureSvg];

  for (let i = 0; i < numElements; i++) {
    const svg = svgs[Math.floor(Math.random() * Math.floor(svgs.length))];

    const animationDelay = 0 - Math.floor(Math.random() * Math.floor(8));
    const animationDuration = 6 + Math.floor(Math.random() * Math.floor(8));

    const element = document.createElement("img");

    element.className = "background-element";
    element.src = svg;
    element.style.top = Math.floor(Math.random() * Math.floor(100)) + "%";
    element.style.left = Math.floor(Math.random() * Math.floor(100)) + "%";
    element.style.animation = `bob ${animationDuration}s ease-in-out ${animationDelay}s infinite`;

    backgroundDiv.appendChild(element);
  }
}

function App() {
  return (
    <div>
      <div id="background"></div>
      <div id="title-container">
        <h1>Loot</h1>
        <p>
          A blockchain platform that makes it easy to deploy your game's assets
          as NFTs
        </p>
      </div>
      <Page direction="left" title="The Chain" bullets={bullets.chain} />
      <Page
        direction="right"
        title="The Developer Hub"
        bullets={bullets.devHub}
      />
      <Page direction="left" title="The Wallet" bullets={bullets.wallet} />
      <Page direction="right" title="The API" bullets={bullets.api} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
addBackground();
