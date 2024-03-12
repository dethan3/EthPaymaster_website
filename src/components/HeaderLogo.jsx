import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getUniqueId from "../utils/uniqueid";
import logo from "../../public/assets/images/AAstart.svg";
HeaderLogo.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
};

export default function HeaderLogo({ isDarkMode }) {
  const [stdDeviation, setStdDeviation] = useState(14);
  const [floodColor, setFloodColor] = useState(
    isDarkMode
      ? "hsl(var(--color-primBlue-300))"
      : "hsl(var(--color-suppBlue-300))"
  );
  // Ensure id is unique to avoid duplicate ids on a page
  const headerLogoId = getUniqueId("header-logo-");

  const inactiveColors = (isDark) => {
    if (isDark) {
      setFloodColor("hsl(var(--color-primBlue-300))");
    } else {
      setFloodColor("hsl(var(--color-suppBlue-200))");
    }
  };

  // Increase blur radius and slightly intensify color
  const handleHoverEnter = () => {
    setStdDeviation(26);
    if (isDarkMode) {
      setFloodColor("hsl(var(--color-primBlue-100))");
    } else {
      setFloodColor("hsl(var(--color-suppBlue-400))");
    }
  };

  const handleHoverExit = () => {
    setStdDeviation(14);
    inactiveColors(isDarkMode);
  };

  useEffect(() => {
    inactiveColors(isDarkMode);
  }, [isDarkMode]);

  return <img src={logo} className="App-logo" alt="logo" />;
}
