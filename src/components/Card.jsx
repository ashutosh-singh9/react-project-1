import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="top">
        <span>best Seller</span>
        <p>$55/hr</p>
      </div>
      <img
        src="https://w0.peakpx.com/wallpaper/997/206/HD-wallpaper-deadpool-dc-funny-marvel-thumbnail.jpg"
        alt=""
      />
      <div className="mid">
        <h2>Wade Wilson</h2>
        <span>UI/UX designer</span>
        <a href="">role</a>
        <div className="tags">
          <h4>UI</h4>
          <h4>UX</h4>
          <h4>Photoshop</h4>
          <h4 className="extra">+4</h4>
        </div>
        <p>Step back into classic hoops style with a durable leather.</p>
      </div>
      <button>View Profile</button>
    </div>
  );
};

export default Card;
