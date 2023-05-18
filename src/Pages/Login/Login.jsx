import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = { email, password };
    console.log(newUser);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        toast.success("Login successful", { theme: "dark", autoClose: 2000 });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        toast.success("Login successful", { theme: "dark", autoClose: 2000 });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-10">
      <div className="hero-content grid md:grid-cols-2 gap-5 items-center justify-items-center mx-auto">
        <div className="text-center  ">
          <img src={loginImg} alt="" />
        </div>
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-3xl font-bold text-center my-5 text-primary">
            Login
          </h1>
          <p className="text-center text-red-400">{error}</p>
          <form onSubmit={handleLogin} className="card-body">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
            </div>
            <p className="text-center font-semibold mt-3">
              Racer-X-toys New? Go to{" "}
              <Link to="/register" className="text-orange-500 font-bold">
                Register
              </Link>
            </p>
            <div className="form-control mt-4">
              <input className="btn btn-custom" type="submit" value="Login" />
            </div>
            <div className="divider">OR</div>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleGoogleLogin}
                className="btn btn-primary btn-circle"
                type="button"
              >
                <FaGoogle />{" "}
              </button>
              <button
                onClick={handleGithubLogin}
                className="btn  btn-circle"
                type="button"
              >
                <FaGithub />{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
