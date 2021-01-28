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
              Loot offers a familiar and easy to use{" "}
              <a href="https://app.swaggerhub.com/apis-docs/Loot5/NFTAPI/1.0.0">
                API
              </a>{" "}
              for game developers making it easy to incorporate Loot NFTs into
              their games without any knowledge of blockchain programming.
            </p>
            <p>
              The REST API server is built into the wallet to offer a convenient
              and safe way for game developers to bring assets into their games
              without having to do do any server side programming.
            </p>
          </div>
          <img className="image" src={image} />
        </div>
      </div>
    </div>
  );
}
