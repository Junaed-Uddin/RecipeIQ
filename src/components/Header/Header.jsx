import img from "../../../Image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="navbar bg-base-100 sm:max-w-[1400px] mx-auto py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="sm:btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md w-[300px] space-y-2 dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            {/* search field for mobile device */}
            <div className="flex justify-center items-center relative w-full">
              <input
                type="text"
                placeholder="Search"
                className="fontAwesome input border-none rounded-3xl input-sm h-8 bg-slate-100 w-full px-10"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </ul>
        </div>
        <div className="flex justify-start items-center">
          <img className="w-[60px] sm:w-[70px]" src={img} alt="logo" />
          <a className="font-bold text-transparent bg-clip-text text-xl sm:text-3xl bg-gradient-to-r from-cyan-500 to-blue-500">
            RecipeIQ
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Recipes</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center space-x-3">
          {/* search field  for large device*/}
          <div className="hidden lg:flex justify-center items-center relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="fontAwesome input border-none rounded-3xl input-sm h-10 bg-slate-100 w-full px-10"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
          <FaUserCircle className="text-[40px] md:text-[45px] lg:text-[55px] text-blue-400" />
        </div>
      </div>
    </div>
  );
};

export default Header;
