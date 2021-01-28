import React from "react";
import "./style.scss";

const lockClosedSvg = require("../../../public/assets/svg/lock-open.svg");

export default function Main() {
  return (
    <div id="how-view">
      <div id="how-view-content">
        <h1>
          A <span className="highlight">Win-Win</span> Solution
        </h1>
        <div id="how-view-info">
          <div id="left-info">
            <p>
              A <span className="highlight">Marketplace</span> for{" "}
              <span className="highlight">player owned</span> assets
            </p>
            <p>
              A <span className="highlight">Chest</span> to store them
            </p>
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
