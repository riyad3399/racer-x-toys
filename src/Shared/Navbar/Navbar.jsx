import { Link } from "react-router-dom";
import logo from "../../assets/images/logo (1).png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaUserAltSlash } from "react-icons/fa";
import ActiveLink from "../../ActiveLink/ActiveLink";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful", { theme: "dark", autoClose: 2000 });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const menuItems = (
    <div className="space-x-6 text-gray-500">
      <ActiveLink to="/">
        <span className="font-bold">Home</span>
      </ActiveLink>

      <ActiveLink to="/blog">
        <span className="font-bold">Blog</span>
      </ActiveLink>
      <ActiveLink to="/alltoys">
        <span className="font-bold">All Toys</span>{" "}
      </ActiveLink>
      {user && (
        <>
          <ActiveLink to="/addtoy">
            <span className="font-bold "> Add Toy</span>
          </ActiveLink>
          <ActiveLink to="/mytoys">
            <span className="font-bold ">My Toys</span>
          </ActiveLink>
        </>
      )}
    </div>
  );

  return (
    <nav className="navbar bg-base-100 shadow-xl rounded-md">
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
            {menuItems}
          </ul>
        </div>
        <div className="flex gap-3 items-center">
          <img className="sm:w-4/12" src={logo} alt="" />
          <Link to="/">
            {" "}
            <span className="text-2xl font-bold hidden md:inline-block">Racer X Toys</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">{menuItems}</div>
      <div className="navbar-end ">
        {user ? (
          <>
            {" "}
            {user.photoURL ? (
              <img
                className="w-12 h-12 rounded-full mr-4"
                src={user?.photoURL}
                alt=""
              />
            ) : (
              <FaUserAltSlash className="w-10 h-10 rounded-full mr-4 border border-blue-100 " />
            )}
            <button onClick={handleLogOut} className="btn btn-custom">
              Logout
            </button>{" "}
          </>
        ) : (
          <Link to="/login">
            {" "}
            <button className="btn btn-custom">Login</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
