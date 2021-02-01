import React from "react";
import "./style.scss";

const apiSvg = require("../../../public/assets/svg/API.svg");

export default function Main(props) {
  const { direction } = props;

  return (
    <div id="api" className={`${direction}-panel`}>
      <h1>The API</h1>
      <div className={`${direction}-panel-content`}>
        <div className={`${direction}-panel-info`}>
          <div className="bullet-points">
            <p>
              Loot exposes a robust and extremely simple{" "}
              <a href="https://app.swaggerhub.com/apis-docs/Loot5/NFTAPI/1.0.0">
                REST API
              </a>{" "}
              for developers to incorporate Loot assets into <b>any game</b>{" "}
              new, or pre-existing, with just a <b>few lines of code</b>.
            </p>
          </div>
          <img className="image" src={apiSvg} />
        </div>
      </div>
    </div>
  );
}
