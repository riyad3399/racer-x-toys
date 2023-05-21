import { Link } from "react-router-dom";
import registerImg from "../../assets/images/login.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  useTitle('Register')
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const newUser = { name, email, password, photo };
    console.log(newUser);
    createUser(email, password)
      .then((result) => {
        const currentUser = result.user;
        currentUser.displayName = name;
        currentUser.photoURL = photo;
        console.log(currentUser);
        setError("");
        toast.success("Register successful", {
          theme: "dark",
          autoClose: 2000,
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-10">
      <div className="hero-content grid md:grid-cols-2 items-center justify-items-center">
        <div className="text-center mr-10">
          <img src={registerImg} alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl font-bold text-center my-5 text-primary">
            Register now!
          </h1>
          <p className="text-certer text-red-400">{error}</p>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
              <p
                onClick={handleShowPassword}
                className="absolute bottom-4 right-3"
              >
                {showPassword ? (
                  <FaEye className="text-blue-500" />
                ) : (
                  <FaEyeSlash />
                )}
              </p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                name="photo"
                required
                className="input input-bordered"
              />
              <p className="text-center font-semibold mt-3">
                Have an already Account?{" "}
                <Link to="/login" className="text-orange-500 font-bold">
                  Login
                </Link>
              </p>
            </div>
            <div className="form-control mt-4">
              <input
                className="btn btn-custom"
                type="submit"
                value="Register"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
