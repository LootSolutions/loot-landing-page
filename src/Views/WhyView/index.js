import React from "react";
import "./style.scss";

const lockClosedSvg = require("../../../public/assets/svg/lock-closed.svg");

export default function Main() {
  return (
    <div id="why-view">
      <div id="why-view-content">
        <h1>You don't own that skin bought.</h1>
        <div id="why-view-info">
          <div id="left-info">
            <p>
              Game assets are valuable, but players can’t do anything with them.
            </p>
            <p>
              They are locked away on a server with no way to trade or sell
              them.
            </p>
          </div>
          <img id="why-svg" src={lockClosedSvg} />
          <div id="right-info">
            <p>
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
