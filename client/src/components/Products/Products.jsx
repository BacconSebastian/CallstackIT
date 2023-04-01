import Formas1 from "../../assets/Products/formas1.png";
import Formas2 from "../../assets/Products/formas2.png";
import Formas3 from "../../assets/Products/formas3.png";

import "./Products.scss";

const Products = () => {
  return (
    <div id="products" className="products">
      <h2>
        <span>P</span>
        <span>r</span>
        <span>o</span>
        <span>d</span>
        <span>u</span>
        <span>c</span>
        <span>t</span>
        <span>s</span>
      </h2>
      <div className="card-container">
        <div className="card">
          <h3>Hosting</h3>
          <hr />
          <img src={Formas1} alt="" />
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur.
          </p>
        </div>
        <div className="card">
          <h3>Web Page</h3>
          <hr />
          <img src={Formas3} alt="" />
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
            <br />
            Doloribus, tenetur.
          </p>
        </div>
        <div className="card">
          <h3>Maintenance</h3>
          <hr />
          <img src={Formas2} alt="" />
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
