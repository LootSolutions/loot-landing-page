import React from "react";
import "./style.scss";

const apiSvg = require("../../../public/assets/svg/chain.svg");

export default function Main(props) {
  const { direction } = props;

  return (
    <div id="chain" className={`${direction}-panel`}>
      <h1>The Parachain</h1>
      <div className={`${direction}-panel-content`}>
        <div className={`${direction}-panel-info`}>
          <div className="bullet-points">
            <p>
              Easily create new new game assets for players to buy in the
              marketplace.
            </p>
            <p>
              Track Loot purchases, sales, and revenue of each of your Loot
              assets.
            </p>
          </div>
          <img className="image" src={apiSvg} />
        </div>
      </div>
    </div>
  );
}
