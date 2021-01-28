import React from "react";
import "./style.scss";

const lockClosedSvg = require("../../../public/assets/svg/lock-closed.svg");

export default function Main() {
  return (
    <div id="why-view">
      <div id="why-view-content">
        <div id="why-view-title">
          <h1>
            In-game items are <span id="highlight-minus">valuable</span>
          </h1>
          <p>
            Players <span id="highlight-plus">demand</span> to be{" "}
            <span id="highlight-plus">free</span> to{" "}
            <span id="highlight-plus">capitalize</span> on in-game assets that
            they <em>own</em>.
          </p>
        </div>
        <div id="divider">
          <div className="bullet-points">
            <img src={lockClosedSvg} />
            <p>
              Players are <span id="highlight-minus">forced</span> to use{" "}
              <span id="highlight-minus">restricted</span> in-game marketplaces
            </p>
          </div>
          <div className="bullet-points">
            <img src={lockClosedSvg} />
            <p className="long-paragraph">
              <b>Outside marketplaces</b> fill the gap
              <span id="highlight-minus">frustrating</span> players <br></br>{" "}
              and keeping creators <span id="highlight-minus">in the dark</span>
            </p>
          </div>
          <div className="bullet-points">
            <img src={lockClosedSvg} />
            <p className="long-paragraph">
              Creators are <span id="highlight-minus">cut out</span> in sharing
              value
              <br></br>
              <em>derived</em> from their work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
