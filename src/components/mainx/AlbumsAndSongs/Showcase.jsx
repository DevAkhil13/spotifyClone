import React, { useState } from "react";
import "./Showcase.css";
import Audioy from "../../audiox/Audioy";

const Showcase = (props) => {
  return (
    <div className="">
      <div className={"shwcase text-white pt-5 " + props.color}>
        <div className="p-3 ps-5 pt-4 d-flex">
          <img src={`/${props.image}`} className="image h-25 w-25" alt="" />
          <div className="info ms-3 mt-auto">
            <div className="fs-6 mb-2 fw-bolder">{props.type}</div>
            <h1 className="fw-bolder">{props.name}</h1>
            <div className="fs-6 fw-bolder">
              {props.artist} . {props.name} . {props.year} . {props.time}
            </div>
          </div>
        </div>
      </div>
      <div className={"p-3 ps-4 text-white subnav" + props.color}>
        <div className="d-flex pt-2 ms-1">
          <button className="imge me-4"></button>
          <span className="material-symbols-outlined ter me-4">favorite</span>
          <span className="material-symbols-outlined ter me-4">more_horiz</span>
        </div>
      </div>
      <div className="rewq">
        <Audioy
          name={props.name}
          artist={props.artist}
          image={props.image}
          file={props.file}
        ></Audioy>
      </div>
    </div>
  );
};

export default Showcase;
