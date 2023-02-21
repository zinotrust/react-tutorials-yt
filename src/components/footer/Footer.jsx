import React from "react";
import { goHome } from "../../utils";

const Footer = () => {
  return (
    <div className="--width-100 ">
      <hr />
      <p onClick={goHome} className="--cursor --text-center --p">
        &copy; ZinoTrust Academy
      </p>
    </div>
  );
};

export default Footer;
