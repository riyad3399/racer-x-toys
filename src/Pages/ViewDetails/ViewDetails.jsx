import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ViewDetails = () => {
  const loaderToys = useLoaderData();
  console.log(loaderToys);
  const { photo, name, sellerName, email, price, rating, quantity, details } =
    loaderToys;

  return (
    <div className="mt-10 mx-3">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-4xl mb-10 text-orange-400">
            {name}
          </h2>
          <div className="space-y-5">
            <p className="text-xl font-semibold">
              Seller Name:{" "}
              <span className="text-orange-400 font-bold">{sellerName}</span>{" "}
            </p>
            <p className="text-xl font-semibold">
              Seller Email:{" "}
              <span className="text-orange-400 font-bold">{email}</span>
            </p>
            <p className="text-xl font-semibold">
              Price: ${" "}
              <span className="text-orange-400 font-bold">{price}</span>
            </p>
            <p className="text-xl font-semibold">
              Rating:{" "}
              <span className="text-orange-400 font-bold">{rating}</span>
            </p>
            <p className="text-xl font-semibold">
              Quantity:{" "}
              <span className="text-orange-400 font-bold">{quantity}</span>
            </p>
            <p className="text-xl font-semibold">
              Details:{" "}
              <span className="text-orange-400 font-bold">{details}</span>
            </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      <div className="text-center my-8">
        <Link to="/alltoys">
          <button className="btn btn-primary btn-wide animate-pulse"><FaArrowLeft className="mr-3"/> Go All Toys</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewDetails;
