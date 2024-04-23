import poslogo from "../assets/poslogo.png";
import { navItems } from "../constants";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const [mobileViewOpen, setMobileViewOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileViewOpen(!mobileViewOpen);
  };

  return (
    <nav
      className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b
    border-neutral-700/80"
      id="navbar"
    >
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-8 mr-2" src={poslogo} alt="logo" />
            <span className="text-xl tracking-tight">Proof of Skill</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-b from-green-400 to-blue-500 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileViewOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {mobileViewOpen && (
          <div
            className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col
          justify-center items-center lg:hidden"
          >
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="py-2 px-3 rounded-md bg-gradient-to-b  from-green-400 to-blue-500"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
