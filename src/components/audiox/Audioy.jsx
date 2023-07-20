import React, { useState, useEffect } from "react";
import "./Audioy.css";

const Audioy = (props) => {
  const [audio] = useState(new Audio(props.file));
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    setPlaying(!playing);
    playing ? audio.pause() : audio.play();
  };

  return (
    <div class="text-white d-flex justify-content-between">
      <div className="songdetails d-flex ms-1">
        <img
          className="imgx rounded ms-3 me-3 mt-3"
          src={`/${props.image}`}
          alt=""
        />
        <div className="text-left">
          <div className="songname fw-bold mt-3">{props.name}</div>
          <div className="details text-secondary">{props.artist}</div>
        </div>
      </div>
      <div className="mediaplayer d-flex flex-column">
        <div className="playbtns w-100 d-flex ">
          <span class="material-symbols-outlined fs-4 m-auto me-2 btnx">
            skip_previous
          </span>
          <button
            className="audiobtn m-auto rounded-5 me-3 ms-3"
            id="play"
            onClick={toggle}
          >
            <span class="material-symbols-outlined fs-3">
              {playing ? "pause" : "play_arrow"}
            </span>
          </button>
          <span class="material-symbols-outlined fs-4 m-auto ms-2 btnx">
            skip_next
          </span>
        </div>
        <div className="timeline m-auto">
          <audio src={`/${props.audio}`} id="aud"></audio>
          <div className="progress-container">
            <div className="progressx"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audioy;
