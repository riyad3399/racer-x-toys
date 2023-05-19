import Swal from "sweetalert2";

const AddToy = () => {
  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const sellerName = form.seller.value;
    const email = form.email.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const newToy = {
      photo,
      name,
      sellerName,
      email,
      category,
      price,
      rating,
      quantity,
      details,
      };
      
      fetch('http://localhost:5000/allToys', {
          method: 'POST', 
          headers: {
              'content-type': 'application/json'
          }, 
          body: JSON.stringify(newToy)
      })
          .then(res => res.json())
          .then(data => {
              if (data.insertedId) {
                  form.reset();
                Swal.fire({
                    title: 'Toy add successful!',
                    text: 'Do you want to continue',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
           }
          console.log(data);
      })
  };

  return (
    <div className="my-10 bg-banner rounded-md p-20">
      <h2 className="text-6xl text-cyan-200 animate-pulse font-bold text-center mb-10">
        Add A Toy
      </h2>
      <form onSubmit={handleAddToy}>
        <div className="grid md:grid-cols-2 md:gap-6  ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Toy URL</span>
            </label>
            <input
              type="url"
              placeholder="Toy photo"
              name="photo"
              required
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
              required
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
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Seller Email</span>
            </label>
            <input
              type="email"
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
            <input
              type="text"
              placeholder="Sub Category"
              name="category"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Price</span>
            </label>
            <input
              type="text"
              placeholder="Price"
              name="price"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Rating</span>
            </label>
            <input
              type="text"
              placeholder="Rating"
              name="rating"
              required
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
            required
            className="textarea textarea-bordered"
          />
        </div>
        <div className="form-control mt-4">
          <input className="btn btn-custom" type="submit" value="Add Toy" />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
