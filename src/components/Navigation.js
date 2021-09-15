import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const closeMobileMenu = () => {
    setToggle(false);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          Whensday
        </Link>
        <div className="navbar__icon" onClick={handleToggle}>
          {toggle ? <FaTimes /> : <FaBars />}
        </div>
        <>
          <ul className={toggle ? "navbar__menu active" : "navbar__menu"}>
            <li className="navbar__item">
              <NavLink
                exact
                to="/"
                className="navbar__link"
                onClick={closeMobileMenu}
                activeClassName="navbar__active"
              >
                Home
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                exact
                to="/about"
                className="navbar__link"
                onClick={closeMobileMenu}
                activeClassName="navbar__active"
              >
                About
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                exact
                to="/discography"
                className="navbar__link"
                onClick={closeMobileMenu}
                activeClassName="navbar__active"
              >
                Discography
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink
                exact
                to="/cart"
                className="navbar__link"
                onClick={closeMobileMenu}
                activeClassName="navbar__active"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </>
      </nav>
    </>
  );
};

export default Navigation;
