import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Toys = ({ toys, handleDeteleToy }) => {
  const {
    photo,
    name,
    sellerName,
    email,
    price,
    rating,
    quantity,
    details,
    _id,
  } = toys;

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl w-full mb-8">
        <figure className="md:w-1/2 h-96 my-auto">
          <img className="rounded-lg" src={photo} alt="Album" />
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
            <p className="text-xl font-semibold flex ">
              Rating:{" "}
              <Rating
                className="ml-2"
                style={{ maxWidth: 150 }}
                value={rating}
                readOnly
              />
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
          <div className="card-actions justify-end mt-3">
            <Link to={`/updateToy/${_id}`}>
              <button className="btn btn-success">Updated</button>
            </Link>
            <button
              onClick={() => handleDeteleToy(_id)}
              className="btn btn-error"
            >
              <FaTrash className="mr-2" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toys;
