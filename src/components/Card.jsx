import React from "react";

const Card = (props) => {
  return (
    <div>
      <img className="card-img" src={props.src} alt={props.id} />
      <div className="card-desc">
        <div className="card-title">
          <h3>{props.title}</h3>
          <p>{props.author}</p>
        </div>
        <div className="card-interaction">
            <p>
                <img src="./assets/images/like.svg" alt="" />
                {props.likesCount}
            </p>
            <p>
                <img src="./assets/images/view.svg" alt="" />
                {props.viewsCount}
            </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
