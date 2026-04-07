import React, { useState } from "react";
import assets from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Us" },
    { path: "/service", name: "Service" },
    { path: "/contact", name: "Contact Us" },
  ];

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="h-[70px] sticky top-0 z-50 bg-white/10 shadow-sm">
      <div className="flex items-center justify-between h-full px-6 lg:px-12">
        <div className="flex items-center">
          <img
            src={assets.RoscoLogo1}
            alt="LOGO"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
          />
        </div>

        <ul
          className={`flex lg:flex-row flex-col items-center gap-8 text-sm 
          lg:static absolute left-0 top-[70px] w-full lg:w-auto 
          bg-white lg:bg-transparent 
          h-[calc(100vh-70px)] lg:h-auto 
          p-8 lg:p-0
          transition-all duration-300
          ${isOpen ? "translate-y-0" : "-translate-y-[120%] lg:translate-y-0"}`}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive
                    ? "text-pryClr font-semibold"
                    : "text-black/80 hover:text-pryClr"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to={"/BookService"}
            onClick={handleLinkClick}
            className=" lg:hidden bg-pryClr text-white px-5 py-2 rounded-lg text-sm items-center justify-center hover:opacity-90 transition"
          >
            Book Service
          </Link>
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to={"/BookService"}
            onClick={handleLinkClick}
            className="lg:flex hidden bg-pryClr text-white px-5 py-2 rounded-lg text-sm items-center justify-center hover:opacity-90 transition"
          >
            Book Service
          </Link>

          <button
            type="button"
            className="lg:hidden block text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoClose className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
