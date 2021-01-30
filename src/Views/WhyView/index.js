import React from "react";
import "./style.scss";

const lockClosedSvg = require("../../../public/assets/svg/lock-closed.svg");

export default function Main() {
  return (
    <div id="why-view">
      <div id="why-view-content">
        <div id="why-view-title">
          <h1>
            Game Developers need better <span id="highlight-minus">incentives.</span>
          </h1>
          <p>
            BlockChain Gaming Platforms have trouble <span id="highlight-plus"> attracting and retaining </span>
            game developers.
          </p>
        </div>
        <div id="divider">
          <div className="bullet-points">
            <img src={lockClosedSvg} />
            <p>
              Developers are <span id="highlight-minus">deterred</span> by performance and UX issues.
            </p>
          </div>
          <div className="bullet-points">
            <img src={lockClosedSvg} />
            <p className="long-paragraph">
              <b>In game assets</b> are traded on External Marketplaces without developer or creator
              <span id="highlight-minus"> permission </span>.
            </p>
          </div>
          <div className="bullet-points">
            <img src={lockClosedSvg} />
            <p className="long-paragraph">
              Developers and Creators do not receive <span id="highlight-minus">Royalties</span> that reflect the
              value
              <br></br>
              <em>derived</em> from their work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
