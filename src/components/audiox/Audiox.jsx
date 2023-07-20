import React, { useState } from "react";
import "./Audiox.css";

const Audiox = (props) => {
  return (
    <div className=" m-auto rx d-flex justify-content-around mb-4">
      <div className="song text-white p-2 name fs-5 fw-bold">{props.name}</div>
      <audio controls className="w-100 rect m-auto">
        <source
          className="text-white"
          type="audio/mpeg"
          src={`/${props.audio}`}
        ></source>
      </audio>
    </div>
  );
};

export default Audiox;
