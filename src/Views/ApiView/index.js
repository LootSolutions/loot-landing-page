import React from "react";
import "./style.scss";

export default function Main(props) {
  const { direction, title, image, section } = props;
  return (
    <div id={section} className={`${direction}-panel`}>
      <h1>{title}</h1>
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
          <img className="image" src={image} />
        </div>
      </div>
    </div>
  );
}
