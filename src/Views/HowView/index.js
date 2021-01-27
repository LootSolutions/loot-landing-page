import React from "react";
import "./style.scss";

const lockClosedSvg = require("../../../public/assets/svg/lock-open.svg");

export default function Main() {
  return (
    <div id="how-view">
      <div id="how-view-content">
        <h1>
          What if there was a <span className="highlight">better</span> way?
        </h1>
        <div id="how-view-info">
          <div id="left-info">
            <p>A platform that let players actually own their assets. </p>
            <p>A way for their loot to outlive the game they belong to.</p>
          </div>
          <img id="how-svg" src={lockClosedSvg} />
          <div id="right-info">
            <p>A place where where players could buy, and sell their loot.</p>
            <p>
              A solution to microtransactions that still lets game studios make
              money
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
