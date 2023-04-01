import CallStackIT from "../../assets/shared/callstack-icon.png";
import CallStackITWhite from "../../assets/shared/callstack-icon-white.png";

import "./Brandmark.scss";

const Brandmark = ({ navbarStyle }) => {
  return (
    <a href="#head-navbar" className={"brandmark " + (navbarStyle ? navbarStyle : "")}>
      {navbarStyle === "fixed" ? (
        <img className="icon" src={CallStackIT} alt="CallStackIT Icon" />
      ) : (
        <img className="icon" src={CallStackITWhite} alt="CallStackIT Icon" />
      )}
      CallStack-IT
    </a>
  );
};

export default Brandmark;
