import { Link } from "react-router-dom";
import logo from "../../assets/images/logo (1).png";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="font-bold" to="/">
                Home
              </Link>
            </li>
            <li tabIndex={0}>
              <Link className="font-bold" to="/blog">Blog</Link>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div>
          <img className="sm:w-4/12" src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <Link className="mr-4 text-lg font-semibold" to="/">
          Home
        </Link>
        <Link className="text-lg font-semibold" to="/blog">Blog</Link>
      </div>
      <div className="navbar-end ">
        <button className="btn animate-pulse duration-500 bg-[#19A7CE]">Get started</button>
      </div>
    </nav>
  );
};

export default Navbar;
