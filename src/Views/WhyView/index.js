import React from "react";
import "./style.scss";

const lockClosedSvg = require("../../../public/assets/svg/lock-closed.svg");

export default function Main() {
  return (
    <div id="why-view">
      <div id="why-view-content">
        <div id="why-view-title">
          <h1>
            In-game assets are <span id="highlight-minus">valuable.</span>
          </h1>
          <p>
            Players should fully own <span id="highlight-plus"> purchased game assets </span> and trade them freely.
          </p>
        </div>
        <div id="divider">
          <div className="bullet-points">
            <img src={lockClosedSvg} />
            <p>
               Players are forced to trade on <span id="highlight-minus">restricted markets</span> without true ownership.
            </p>
          </div>
          <div className="bullet-points">
            <img src={lockClosedSvg} />
            <p className="long-paragraph">
              Frustrated players trade on external markets without creator 
              <span id="highlight-minus"> permission </span> and often encountering <span id="highlight-minus"> fraud </span>.
            </p>
          </div>
          <div className="bullet-points">
            <img src={lockClosedSvg} />
            <p className="long-paragraph">
              Developers and Creators do not receive <span id="highlight-minus">Royalties</span> that reflect the
              value <em>derived</em> from their work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
