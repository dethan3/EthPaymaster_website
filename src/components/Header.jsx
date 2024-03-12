import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import HeaderLogo from "./HeaderLogo";

Header.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default function Header({ isDarkMode, toggleDarkMode }) {
  return (
    <header className="flex flex-row flex-wrap items-center justify-between gap-6 pt-6 pb-4 px-mobileBound">
      <Link to="/">
        <HeaderLogo isDarkMode={isDarkMode} />
      </Link>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </header>
  );
}
