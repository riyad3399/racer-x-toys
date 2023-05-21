import offer1 from "../../../assets/images/offer (1).jpg";
import offer2 from "../../../assets/images/offer (2).jpg";
import offer3 from "../../../assets/images/offer (3).jpg";
import offer4 from "../../../assets/images/offer (4).jpg";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const SpecialOffers = () => {
  return (
    <>
      <h2 className="text-5xl font-bold text-cyan-600 text-center my-5">
        Special Offers
      </h2>
      <hr className="w-1/2 mx-auto border border-gray-200" />
      <div className="grid md:grid-cols-4 gap-5 my-10">
        <div className="card w-full bg-base-100 hover:shadow-2xl border-2 hover:border-none duration-100">
          <figure className="p-5">
            <img className="w-80 h-52 rounded-md" src={offer1} alt="toy" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Mini Truck</h2>
            <Rating
              className="ml-2"
              style={{ maxWidth: 100 }}
              value={4}
              readOnly
            />
            <div className="flex items-center gap-2">
              <span className="text-orange-600 text-lg font-bold">$55.00</span>
              <span className="text-orange-400 text-lg font-bold ">$75.00</span>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost hover:btn-accent">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 hover:shadow-2xl border-2 hover:border-none duration-100">
          <figure className="p-5">
            <img className="w-80 h-52 rounded-md" src={offer2} alt="toy" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Train</h2>
            <Rating
              className="ml-2"
              style={{ maxWidth: 100 }}
              value={3}
              readOnly
            />
            <div className="flex items-center gap-2">
              <span className="text-orange-600 text-lg font-bold">$19.00</span>
              <span className="text-orange-400 text-lg font-bold ">$21.00</span>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost hover:btn-accent">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 hover:shadow-2xl border-2 hover:border-none duration-100">
          <figure className="p-5">
            <img className="w-80 h-52 rounded-md" src={offer3} alt="toy" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Mini Jeep</h2>
            <Rating style={{ maxWidth: 100 }} value={5} readOnly />
            <div className="flex items-center gap-2">
              <span className="text-orange-600 text-lg font-bold">$130.00</span>
              <span className="text-orange-400 text-lg font-bold ">
                $110.00
              </span>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost hover:btn-accent">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 hover:shadow-2xl border-2 hover:border-none duration-100">
          <figure className="p-5">
            <img className="w-80 h-52 rounded-md" src={offer4} alt="toy" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Red Car</h2>
            <Rating style={{ maxWidth: 100 }} value={3} readOnly />
            <div className="flex items-center gap-2">
              <span className="text-orange-600 text-lg font-bold">$99.00</span>
              <span className="text-orange-400 text-lg font-bold ">
                $111.00
              </span>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost hover:btn-accent">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialOffers;
