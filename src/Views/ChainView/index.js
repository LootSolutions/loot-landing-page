import React from "react";
import "./style.scss";

const apiSvg = require("../../../public/assets/svg/chain.svg");

export default function Main(props) {
  const { direction } = props;

  return (
    <div id="chain" className={`${direction}-panel`}>
      <h1>The Polychain</h1>
      <div className={`${direction}-panel-content`}>
        <div className={`${direction}-panel-info`}>
          <div className="bullet-points">
          <p>
            Loot is built with substrate allowing us to fully optimize and tailor the platform around game development while keeping transaction fees low.
          </p>
          <p>
             Leveraging the Polkadot ecosystem via parachains enables take advantage of the features of other parachains on the network.
          </p>
          </div>
          <img className="image" src={apiSvg} />
        </div>
      </div>
    </div>
  );
}
