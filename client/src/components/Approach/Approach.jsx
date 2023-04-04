// import CallstackIcon from "../../assets/shared/callstack-icon.png"

import "./Approach.scss"

const Approach = () => {
  return (
    <div id="approach" className="approach">
      <h2>We develop things<br />to bring your ideas to life</h2>
      {/* <img src={CallstackIcon} alt="" /> */}
      <div className="data-container">
        {/* <div className="data-approach">
          <p><span>Landing page</span> - <span>Launch page</span> - <span>E-Commerce</span></p>
        </div>
        <div className="data-approach">
          <p><span>Landing page</span> - <span>Launch page</span> - <span>E-Commerce</span></p>
        </div> */}
        <p className="data-one">Landing Page</p>
        <p className="data-two">Launch Page</p>
        <p className="data-three">E-Commerce</p>
      </div>
    </div>
  )
}

export default Approach