import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";

const Sports = ({ sportCar }) => {
  const { photo, name, price, rating, _id } = sportCar;
  return (
    <div>
      <div className="card w-full bg-base-100 hover:shadow-2xl border-2 border-gray-200 hover:border-none duration-100">
        <figure className="px-8 pt-8">
          <img src={photo} alt="sport car" className="rounded-xl w-96 h-52" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div>
            <p className="flex items-center">Price: {price}</p>
            <p className="flex items-center">
              Rating:{" "}
              <Rating
                className="ml-2 "
                style={{ maxWidth: 150 }}
                value={rating}
                readOnly
              />
            </p>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/viewDetails/${_id}`}>
              <button className="btn hover:btn-info btn-outline">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sports;
