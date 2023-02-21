import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { goHome } from "../../utils";

const Header = () => {
  return (
    <header>
      <div className=" container header">
        <div className="logo">
          <h2 className="--text-light --cursor" onClick={goHome}>
            ZinoTrust<span className="--color-danger">Academy</span>.com
          </h2>
        </div>
        <nav>
          <ul className="nav">
            <li>
              <Link to="/hone">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
