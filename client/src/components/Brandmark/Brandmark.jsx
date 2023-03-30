import CallStackIT from "../../assets/shared/callstack-icon.png"

import "./Brandmark.scss"

const Brandmark = () => {
  return (
    <a className="brandmark">
      <img className="icon" src={CallStackIT} alt="CallStackIT Icon" />
      CallStack-IT
    </a>
  )
}

export default Brandmark