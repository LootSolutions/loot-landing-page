import React from "react";
import ReactDOM from "react-dom";
import WhyView from "./Views/WhyView";
import HowView from "./Views/HowView";
import Topbar from "./Components/Topbar";
import ApiView from "./Views/ApiView";
import ChestView from "./Views/ChestView";
import StudioView from "./Views/StudioView";
import ChainView from "./Views/ChainView";

const bullets = require("./bullets.json");

const sparkleSvg = require("../public/assets/svg/sparkle.svg");
const diamondSvg = require("../public/assets/svg/gem.svg");
const treasureSvg = require("../public/assets/svg/treasure.svg");
const swordSvg = require("../public/assets/svg/sword.svg");

function addBackground() {
  const numElements = 100;
  const backgroundDiv = document.getElementById("background");

  let svgs = [sparkleSvg, swordSvg, diamondSvg, treasureSvg];

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

function topBarHide() {
  const scrollPercentage =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

  const sidebar = document.getElementById("topbar");

  if (!sidebar) {
    console.log("test");
    return;
  }

  if (scrollPercentage > 4) {
    sidebar.classList.remove("opaque");
    sidebar.classList.add("transparent");
  } else {
    sidebar.classList.remove("transparent");
    sidebar.classList.add("opaque");
  }
}

window.addEventListener("scroll", (event) => {
  window.href = "#chain";
  topBarHide();
});

function App() {
  return (
    <div id="app">
      <Topbar />
      <div id="content">
        <div id="background"></div>
        <div id="home">
          <h1>Loot</h1>
          <p>
            Unlock the <em>value</em> of your <b>Game Items</b>
          </p>
        </div>
        <WhyView direction="left" />
        <HowView direction="right" />
        <ChainView direction="left" />
        <StudioView direction="right" />
        <ChestView direction="left" />
        <ApiView direction="right" />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
addBackground();
