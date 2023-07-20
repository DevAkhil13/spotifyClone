import React from "react";

const Header = () => {
  return (
    <div className="p-2 pt-3 ps-3 d-flex p-fixed headx me-2">
      <div className="arrows">
        <span className="ar material-symbols-outlined text-light fs-3 p-1 rounded-5 me-2">
          chevron_left
        </span>
        <span className="ar material-symbols-outlined text-light fs-3 p-1 rounded-5 me-2">
          chevron_right
        </span>
      </div>
      <div className="btnsx d-flex">
        <button className="rounded-5 me-3 fw-bold shad">
          {" "}
          Explore Premium
        </button>
        <button className="blck text-white me-3 rounded-5 d-flex pt-1 shad">
          <span class="material-symbols-outlined pe-1">download</span>
          <div className="mb-2">Install App</div>
        </button>

        <span className="material-symbols-outlined text-white fs-2 m-auto mb-2">
          account_circle
        </span>
      </div>
    </div>
  );
};

export default Header;
