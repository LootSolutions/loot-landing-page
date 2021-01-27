import React from "react";
import "./style.scss";

const lockClosedSvg = require("../../../public/assets/svg/lock-closed.svg");

export default function Main() {
  return (
    <div id="why-view">
      <div id="why-view-content">
        <div id="why-view-title">
          <h1>
            You don't <span id="highlight">own</span> that skin bought.
          </h1>
          <p>
            Game assets are valuable, but players can’t do anything with them.
          </p>
        </div>
        <div id="divider">
          <div className="bullet-points">
            <img src={lockClosedSvg} />
            <p>
              They are locked away on a server with no way to trade or sell
              them.
            </p>
          </div>
          <div className="bullet-points">
            <img src={lockClosedSvg} />
            <p className="long-paragraph">
              If a player did want to sell their assets they would have to go
              through an outside marketplace completely cutting the game studio
              out of the equation, and the profits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
