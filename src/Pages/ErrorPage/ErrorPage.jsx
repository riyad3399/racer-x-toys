import { Link, useRouteError } from "react-router-dom";
import errorPhoto from "../../assets/images/error.jpg";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  const error = useRouteError();
  console.log("error page", error);
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md mb-4">
          <img src={errorPhoto} alt="" />
        </div>
        <div className="max-w-md text-center">
          <p className="text-2xl font-semibold md:text-3xl mb-8  text-error">
            {error?.error.message}
          </p>
          <Link className="flex md:ml-28" to="/">
            <button className="btn btn-custom  ">
              {" "}
            <FaArrowLeft className="mr-2"/>  Back to homepage
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
