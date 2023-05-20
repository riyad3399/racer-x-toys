const Toys = ({ toys }) => {
  const { photo, name, sellerName, email, price, rating, quantity, details } =
    toys;

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl w-full mb-8">
        <div className="w-1/2">
          <figure>
            <img className="rounded-lg" src={photo} alt="Album" />
          </figure>
        </div>
        <div className="card-body w-1/2">
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
    </div>
  );
};

export default Toys;
