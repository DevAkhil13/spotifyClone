import React from "react";
import "./Populartracks.css";

const Track = (props) => {
  return (
    <div>
      <div className="track p-2 rounded justify-content-between d-flex me-3">
        <div className="d-flex">
          <div className="number m-auto me-3 ">{props.number}</div>
          <img
            className="trackimage rounded m-auto me-3"
            src={`/${props.image}`}
            alt=""
          />
          <div className="trackname m-auto">{props.trackname}</div>
        </div>
        <div className="d-flex w-50 justify-content-between">
          <div className="users m-auto ms-0">{props.users}</div>
          <div className="time m-auto me-2">{props.time}</div>
        </div>
      </div>
    </div>
  );
};

export default Track;
