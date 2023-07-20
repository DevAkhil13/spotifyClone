import React from "react";
import Showcase from "./Showcase";
import Populartracks from "./Populartracks";
import Tile from "../Tile";

const Album = () => {
  return (
    <div>
      <Showcase
        color="blue"
        name="Pathaan"
        image="two.jpg"
        type="Album"
        artist="Arjit singh"
        year="2022"
        time="4:28"
      ></Showcase>
      <Populartracks
        use="Songs in,"
        type="Pathaan"
        track1="Besharam rang"
        track1img="two.jpg"
        track1users="362,209,156"
        track1time="4:28"
        track2="Jhoome jo pathaan"
        track2img="two.jpg"
        track2users="12,209,156"
        track2time="3:26"
        track3="pathaan theme"
        track3img="two.jpg"
        track3users="542,209,156"
        track3time="2:55"
      ></Populartracks>
      <div className="coloumn mb-5 ms-2 mt-5">
        <div className="heading mt-1 fw-bolder fs-4 ps-2 text-light mb-4">
          Other popular albums
        </div>
        <div className="d-flex justify-content-around">
          <Tile name="Bramhastra" image="./one.jpg" addressx="/one">
            Arjit Singh
          </Tile>
          <Tile name="Pathaan" image="./two.jpg">
            Arjit Singh,Vishal Dadlani
          </Tile>
          <Tile name="Ok Jannu" image="three.jpg">
            A.R. Rahaman,Arjit Singh
          </Tile>
          <Tile name="Sanam re" image="four.jpg">
            Arjit Singh,Mithoon
          </Tile>
          <Tile name="Aashiqui 2" image="five.jpg">
            Arjit Singh
          </Tile>
        </div>
      </div>
    </div>
  );
};

export default Album;
