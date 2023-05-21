import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const UpdateToy = () => {
  useTitle('Update Toy')
  const { user } = useContext(AuthContext);
  const loaderToy = useLoaderData();
  console.log(loaderToy);
  const { photo, name, sellerName, rating, _id } = loaderToy;

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;

    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const updateToy = {
      price,
      quantity,
      details,
    };

    fetch(`https://racer-x-toys-server.vercel.app/allToys/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="my-10 bg-update rounded-md p-20">
      <h2 className="text-6xl text-cyan-200 animate-pulse font-bold text-center mb-10">
        Update A Toy
      </h2>
      <form onSubmit={handleUpdateToy}>
        <div className="grid md:grid-cols-2 md:gap-6  ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Toy URL</span>
            </label>
            <input
              type="url"
              placeholder="Toy photo"
              name="photo"
              value={photo}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Seller Name</span>
            </label>
            <input
              type="text"
              placeholder="seller Name"
              name="seller"
              value={sellerName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Seller Email</span>
            </label>
            <input
              type="email"
              value={user?.email}
              placeholder="Seller Email"
              name="email"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Sub Category</span>
            </label>
            <select name="category" id="" className="select select-bordered">
              <option value="sports">Sports</option>
              <option value="truck">Truck</option>
              <option value="regular">Regular</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              defaultValue="3k"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Rating</span>
            </label>
            <input
              type="number"
              placeholder="Rating"
              name="rating"
              value={rating}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Available quantity"
              name="quantity"
              defaultValue="40+"
              required
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Description</span>
          </label>
          <textarea
            type="text"
            placeholder="Details Description"
            name="details"
            defaultValue="type your description"
            required
            className="textarea textarea-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-custom" type="submit" value="Update Toy" />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
