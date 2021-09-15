import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <Link className="nav__logo" to="/">
          Whensday
        </Link>
        <div className="nav__icon">
          <FaBars />
        </div>

        <ul className="nav__menu">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Discography
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
