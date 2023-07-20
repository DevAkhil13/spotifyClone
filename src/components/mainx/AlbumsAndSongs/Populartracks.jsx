import React from "react";
import "./Populartracks.css";
import Track from "./Track";

const Populartracks = (props) => {
  return (
    <div className="pt-4 text-white ps-4">
      <div className="text-secondary">{props.use}</div>
      <div className="fw-bold fs-4 mb-3">{props.type}</div>
      <div className="tracks ">
        <Track
          number="1"
          image={props.track1img}
          trackname={props.track1}
          users={props.track1users}
          time={props.track1time}
        ></Track>
        <Track
          number="2"
          image={props.track2img}
          trackname={props.track2}
          users={props.track2users}
          time={props.track2time}
        ></Track>
        <Track
          number="3"
          image={props.track3img}
          trackname={props.track3}
          users={props.track3users}
          time={props.track3time}
        ></Track>
      </div>
    </div>
  );
};

export default Populartracks;
