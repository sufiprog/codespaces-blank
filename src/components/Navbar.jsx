import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("top"); // Default active section

  const handleNavLinkClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="overflow-x-hidden playwrite">
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] pointer-events-none select-none">
        <img src="../header-bg.png" className="w-full" alt="" />
      </div>
      <nav className="w-full top-0 fixed px-5 lg:px-8 xl:px[8%] py-4 flex items-center justify-between z-50">
        <a href="/">
          <div className="relative inline-block ">
            <span class="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-50 rounded-full w-40  animate-pulse blur-3xl"></span>

            <span className="text-2xl md:text-3xl font-medium text-gray-800 ">
              Sufi
            </span>
            <span className="absolute right-50 top-2 text-2xl md:text-3xl text-gray-600">
              Prog
            </span>
          </div>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 backdrop-blur-md">
          <li>
            <NavLink
              to="/#top"
              onClick={() => {
                document
                  .getElementById("top")
                  .scrollIntoView({ behavior: "smooth" });
                handleNavLinkClick("top");
              }}
              className={
                activeSection === "top" ? "border-b-2 border-blue-500" : ""
              }
            >
              <p>Home</p>
              <hr
                className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                  activeSection === "top" ? "" : "hidden"
                }`}
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#about"
              onClick={() => {
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" });
                handleNavLinkClick("about");
              }}
              className={
                activeSection === "about" ? "border-b-2 border-blue-500" : ""
              }
            >
              <p>About me</p>
              <hr
                className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                  activeSection === "about" ? "" : "hidden"
                }`}
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#services"
              onClick={() => {
                document
                  .getElementById("services")
                  .scrollIntoView({ behavior: "smooth" });
                handleNavLinkClick("services");
              }}
              className={
                activeSection === "services" ? "border-b-2 border-blue-500" : ""
              }
            >
              <p>Services</p>
              <hr
                className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                  activeSection === "services" ? "" : "hidden"
                }`}
              />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/#contact"
              onClick={() => {
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" });
                handleNavLinkClick("contact");
              }}
              className={
                activeSection === "contact" ? "border-b-2 border-blue-500" : ""
              }
            >
              <p>Contact</p>
              <hr
                className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                  activeSection === "contact" ? "" : "hidden"
                }`}
              />
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <NavLink
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
            to="hire-me"
          >
            Hire me <img className="w-3" src="../arrow-icon.png" alt="" />
          </NavLink>
          <button className="block md:hidden ">
            <img
              onClick={() => setMenu(true)}
              className="w-6 "
              src="../menu-black.png"
              alt=""
            />
          </button>

          {/* Mobile Menu */}
          <ul
            className={`flex gap-4 md:hidden flex-col py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-gradient-to-r from-purple-50 via-gray-100 to-blue-100 transition-all duration-500 ${
              menu ? "right-0" : "-right-64"
            }`}
          >
            <div className="absolute right-6 top-6 active:rotate-90 transition duration-200">
              <img
                onClick={() => setMenu(false)}
                src="../close-black.png"
                className="w-5 cursor-pointer"
                alt=""
              />
            </div>

            <li>
              <NavLink
                onClick={() => {
                  document
                    .getElementById("top")
                    .scrollIntoView({ behavior: "smooth" });
                  setMenu(false);
                  handleNavLinkClick("top");
                }}
                to="/#top"
              >
                Home
                <hr
                  className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                    activeSection === "top" ? "" : "hidden"
                  }`}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  document
                    .getElementById("about")
                    .scrollIntoView({ behavior: "smooth" });
                  setMenu(false);
                  handleNavLinkClick("about");
                }}
                to="/#about"
              >
                About me
                <hr
                  className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                    activeSection === "about" ? "" : "hidden"
                  }`}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  document
                    .getElementById("services")
                    .scrollIntoView({ behavior: "smooth" });
                  setMenu(false);
                  handleNavLinkClick("services");
                }}
                to="/#services"
              >
                Services
                <hr
                  className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                    activeSection === "services" ? "" : "hidden"
                  }`}
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" });
                  setMenu(false);
                  handleNavLinkClick("contact");
                }}
                to="/#contact"
              >
                Contact
                <hr
                  className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                    activeSection === "contact" ? "" : "hidden"
                  }`}
                />
              </NavLink>
            </li>

            <Link
              className="flex items-center gap-1 px-3 py-1 border border-gray-500 mt-5 rounded w-fit hover:bg-purple-200"
              to="hire-me"
            >
              Hire me <img className="w-2" src="../arrow-icon.png" alt="" />
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
