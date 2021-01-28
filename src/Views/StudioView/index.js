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
              Loot exposes a robust and <em>extremely simple</em>{" "}
              <a href="https://app.swaggerhub.com/apis-docs/Loot5/NFTAPI/1.0.0">
                REST API
              </a>{" "}
              for developers to incorporate Loot assets into <b>any game</b>{" "}
              new, or pre-existing, with just a{" "}
              <b>
                <em>few lines of code</em>
              </b>
              .
            </p>
          </div>
          <img className="image" src={studioSvg} />
        </div>
      </div>
    </div>
  );
}
