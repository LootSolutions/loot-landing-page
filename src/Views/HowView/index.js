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
              A <span className="highlight"> Marketplace</span> for{" "}
              <span className="highlight">player owned</span> assets
            </p>
            <p>
              A <span className="highlight">Chest</span> to store them
            </p>
          </div>
          <img id="how-svg" src={lockClosedSvg} />
          <div id="right-info">
            <p> A performant and simple API to interface with our platform.</p>
            <p>
              A Royalty solution that reflects creator value and incentivizes platform development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
