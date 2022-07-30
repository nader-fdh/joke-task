import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  useEffect(() => {});

  return (
    <nav className="nav">
      <>
        <div className="nav-menu">
          <a>
            <span className="so-funktionierts">SO FUNKTIONIERT'S</span>
          </a>
          <a>
            <span className="SONDERANGEBOTE">SONDERANGEBOTE</span>
          </a>
          {/* <a>
            <span  className="menu">
              <select>
                <option value="First">First</option>
                <option value="Second">Second</option>
                <option value="Third">Third</option>
              </select> 
            </span>
          </a> */}
        </div>
      </>
    </nav>
  );
};


export default NavBar;
