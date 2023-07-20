import React from "react";
import Showcase from "./Showcase";
import Populartracks from "./Populartracks";
import Tile from "../Tile";

const Five = () => {
  return (
    <div>
      <Showcase
        color="blue"
        name='Milne he mujse ayi(From "Aashiqui2")'
        image="five.jpg"
        type="song"
        artist="Arjit Singh"
        year="2014"
        time="4:28"
        file="MilneHa.mp3"
      ></Showcase>
      <Populartracks
        use="Popular songs by,"
        type="Arjit Singh"
        track1='Kesariya(From "Brahmastra")'
        track1img="one.jpg"
        track1users="362,209,156"
        track1time="4:28"
        track2='Jhomaa jo pathaan(From "Pathaan")'
        track2img="two.jpg"
        track2users="12,209,156"
        track2time="3:26"
        track3='Yenaa sona(From "Ok Jannu")'
        track3img="three.jpg"
        track3users="542,209,156"
        track3time="2:55"
      ></Populartracks>
      <div className="coloumn mb-5 ms-2 mt-5">
        <div className="heading mt-1 fw-bolder fs-4 ps-2 text-light mb-4">
          Popular releases by pritam
        </div>
        <div className="d-flex justify-content-around">
          <Tile name="Kesariya" image="./one.jpg" addressx="/one">
            Arjit Singh
          </Tile>
          <Tile name="Jhoom me jo pathaan" image="./two.jpg">
            Arjit Singh,Vishal Dadlani
          </Tile>
          <Tile name="Enna Sona" image="three.jpg">
            A.R. Rahaman,Arjit Singh
          </Tile>
          <Tile name="Sanam re" image="four.jpg">
            Arjit Singh,Mithoon
          </Tile>
          <Tile name="Milne he mujhse aayi" image="five.jpg">
            Arjit Singh
          </Tile>
        </div>
      </div>
      <div className="coloumn mb-5 ms-2 mt-4">
        <div className="heading mt-1 fw-bolder fs-4 ps-2 text-light mb-4 ">
          Popular Albums by pritam
        </div>
        <div className="d-flex justify-content-around">
          <Tile name="Kesariya" image="./one.jpg" addressx="/one">
            Arjit Singh
          </Tile>
          <Tile name="Jhoom me jo pathaan" image="./two.jpg">
            Arjit Singh,Vishal Dadlani
          </Tile>
          <Tile name="Enna Sona" image="three.jpg">
            A.R. Rahaman,Arjit Singh
          </Tile>
          <Tile name="Sanam re" image="four.jpg">
            Arjit Singh,Mithoon
          </Tile>
          <Tile name="Milne he mujhse aayi" image="five.jpg">
            Arjit Singh
          </Tile>
        </div>
      </div>
    </div>
  );
};

export default Five;
