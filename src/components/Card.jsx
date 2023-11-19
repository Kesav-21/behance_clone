import React from "react";

const Card = (props) => {
  return (
    <div>
      <img className="card-img" src="/src/assets/1.webp" alt="1" />
      <div className="card-desc">
        <div className="card-title">
          <h3>{props.title}</h3>
          <p>{props.author}</p>
        </div>
        <div className="card-interaction">
            <p>
                <img src="/src/assets/like.svg" alt="" />
                {props.likesCount}
            </p>
            <p>
                <img src="/src/assets/view.svg" alt="" />
                {props.viewsCount}
            </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
