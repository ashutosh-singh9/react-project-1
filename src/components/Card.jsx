import React from "react";

const Card = (prop) => {
  return (
    <div className="card">
      <div className="top">
        <span>{prop.id}</span>
        <p>{prop.price}</p>
      </div>
      <img
        src={prop.image}
        alt=""
      />
      <div className="mid">
        <h2>{prop.name}</h2>
        <span>{prop.role}</span>
        <a href="">{prop.idt}</a>
        <div className="tags">
          <h4>{prop.tag1}</h4>
          <h4>{prop.tag2}</h4>
          <h4>{prop.tag3}</h4>
          <h4 className="extra">{prop.tag4}</h4>
        </div>
        <p>{prop.info}</p>
      </div>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
