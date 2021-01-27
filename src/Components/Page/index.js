import React from "react";

export default function Main(props) {
  const { direction, title, bullets, image, section } = props;
  return (
    <div id={section} className={`${direction}-panel`}>
      <h1>{title}</h1>
      <div className={`${direction}-panel-content`}>
        <div className={`${direction}-panel-info`}>
          <div className="bullet-points">
            {bullets.map((b) => (
              <div key={bullets.indexOf(b)}>{b}</div>
            ))}
          </div>
          <img className="image" src={image} />
        </div>
      </div>
    </div>
  );
}
