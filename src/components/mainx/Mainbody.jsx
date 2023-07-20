import React from "react";
import Tile from "./Tile";

const Mainbody = () => {
  return (
    <div className="mt-2 p-2">
      <div className="coloumn mb-5">
        <div className="heading mt-1 fw-bolder fs-4 ps-2 text-light mb-3 ">
          Best of Arjit Singh
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
          <Tile name="Milne he mujhse aayi" image="five.jpg" addressx="/five">
            Arjit Singh
          </Tile>
        </div>
      </div>
      <div className="coloumn">
        <div className="heading mt-3 fw-bolder fs-4 ps-2 text-light mb-3 ">
          Best Albums
        </div>
        <div className="d-flex justify-content-around">
          <Tile name="Bramhastra" image="./one.jpg">
            Arjit Singh
          </Tile>
          <Tile name="Jhoom me jo pathaan" image="./two.jpg" addressx="/album">
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

export default Mainbody;
