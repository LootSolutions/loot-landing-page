import React from "react";
import "./style.scss";

const studioSvg = require("../../../public/assets/svg/studio.svg");

export default function Main(props) {
  const { direction } = props;

  return (
    <div id="studio" className={`${direction}-panel`}>
      <h1>The Studio</h1>
      <div className={`${direction}-panel-content`}>
        <div className={`${direction}-panel-info`}>
          <div className="bullet-points">
            <p>
              Easily create new game assets for players to buy in the marketplace.
            </p>
            <p>
              For every asset sold, a royalty is transferred to the game creator.
            </p>
            <p>
              Analytics to track asset purchases, sales, and revenue.
            </p>
          </div>
          <img className="image" src={studioSvg} />
        </div>
      </div>
    </div>
  );
}
