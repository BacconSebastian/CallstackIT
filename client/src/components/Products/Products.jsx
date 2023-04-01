import Formas1 from "../../assets/Products/formas1.png"
import Formas2 from "../../assets/Products/formas2.png"
import Formas3 from "../../assets/Products/formas3.png"

import "./Products.scss"

const Products = () => {
  return (
    <div id="products" className="products">
      <h2>Products</h2>
      <div className="card-container">
        <div className="card">
          <h3>Host Managment</h3>
          <hr />
          <img src={Formas1} alt="" />
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /><br /> Quis enim earum nulla quas unde consequatur cumque numquam debitis? Doloribus, tenetur.
          </p>
        </div>
        <div className="card">
          <h3>Web Page</h3>
          <hr />
          <img src={Formas3} alt="" />
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /><br /> Quis enim earum nulla quas unde consequatur cumque numquam debitis? <br /><br />Doloribus, tenetur.
          </p>
        </div>
        <div className="card">
          <h3>Maintenance</h3>
          <hr />
          <img src={Formas2} alt="" />
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /><br /> Quis enim earum nulla quas unde consequatur cumque numquam debitis? Doloribus, tenetur.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Products