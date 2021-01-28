import React from "react";
import "./style.scss";

const walletSvg = require("../../../public/assets/svg/market.svg");

export default function Main(props) {
  const { direction } = props;
  return (
    <div id="chest" className={`${direction}-panel`}>
      <h1>The Chest</h1>
      <div className={`${direction}-panel-content`}>
        <div className={`${direction}-panel-info`}>
          <div className="bullet-points">
            <p>
              Our fully featured wallet allows players to interact with our
              blockchain in a form factor they’re familiar with.
            </p>
            <p>
              Launch games, change usernames, buy items, and sell items. Getting
              started on Loot is as easy as creating an account.
            </p>
          </div>
          <img className="image" src={walletSvg} />
        </div>
      </div>
    </div>
  );
}
