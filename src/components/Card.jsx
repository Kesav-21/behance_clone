import React from "react";

const Card = () => {
  return (
    <div>
      <img className="card-img" src="/src/assets/1.webp" alt="1" />
      <div className="card-desc">
        <div className="card-title">
          <h3>Short.Short.Short-Loop</h3>
          <p>CarryGrow</p>
        </div>
        <div className="card-interaction">
            <p>
                <img src="/src/assets/like.svg" alt="" />
                30
            </p>
            <p>
                <img src="/src/assets/view.svg" alt="" />
                130
            </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
