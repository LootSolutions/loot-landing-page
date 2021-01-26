import React from "react";

export default function Main(props) {
  const { direction, title, bullets } = props;
  return (
    <div className={`${direction}-panel`}>
      <h1>{title}</h1>
      <div className={`${direction}-panel-content`}>
        <div className={`${direction}-panel-info`}>
          <div className="bullet-points">
            {bullets.map((b) => (
              <div key={bullets.indexOf(b)}>{b}</div>
            ))}
          </div>
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
}
