import "./Header.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import MuhLogo from "./img/MuhStore.png";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top p-0 bodyColorLight" id="nav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={MuhLogo} alt="Logo" className="logoBrand" />
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon hamburger"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav gap-lg-5">
              <li className="nav-item text-center">
                <NavLink
                  className="nav-link"
                  style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#4968b8",
                  })}
                  to="/"
                  end
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item text-center">
                <NavLink className="nav-link" style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#4968b8",
                  })} to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item text-center">
                <NavLink className="nav-link" style={({ isActive }) => ({
                  color: isActive ? "#fff" : "#4968b8",
                  })} to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

/* <nav className="mt-3">
    <div className='brand'>
        <h1>Portofolio</h1>
    </div>
    <div className='list'>
        <ul className='navMenu'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to=''>Contact</Link></li>
            <li><Link to='/About'>About</Link></li>
        </ul>
    </div>
</nav> */
