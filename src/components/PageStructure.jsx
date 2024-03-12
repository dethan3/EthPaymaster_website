import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import PropTypes from "prop-types";
import RouteScrollTop from "./RouteScrollTop";

PageStructure.propTypes = {
  children: PropTypes.node,
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

const squares = Array.from({ length: 10 }, (_, index) => (
  <div key={index} aria-hidden="true"></div>
));

// Wrapper to structure all pages
export default function PageStructure({
  children,
  isDarkMode,
  toggleDarkMode,
}) {
  return (
    <>
      <div className="ascending-squares" aria-hidden="true">
        {squares}
      </div>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex flex-col items-center justify-center gap-10 mb-10 flex-nowrap sm:gap-11 sm:mb-11 md:gap-12 md:mb-12 lg:gap-13 lg:mb-13">
        {children ?? <Outlet context={[isDarkMode, toggleDarkMode]} />}
      </main>
      {/* <Footer /> */}
      <BackToTop />
      <RouteScrollTop />
    </>
  );
}
