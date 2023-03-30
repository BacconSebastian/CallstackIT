import Brandmark from "../Brandmark/Brandmark"

import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Brandmark />
      <ul>
        <li className="pulse">Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar