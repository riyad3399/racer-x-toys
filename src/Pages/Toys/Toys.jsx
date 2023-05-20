import { FaTrash } from "react-icons/fa";

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

 
    
//   const handleDeteleToy = (id) => {
//     fetch(`http://localhost:5000/deleteToy/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//           console.log(data);
//           setAllToys(data)
//         Swal.fire({
//           title: "Are you sure?",
//           text: "You won't be able to revert this!",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonColor: "#3085d6",
//           cancelButtonColor: "#d33",
//           confirmButtonText: "Yes, delete it!",
//         }).then((result) => {
//           if (result.isConfirmed) {
//               if (data.deletedCount > 0) {
//                 Swal.fire("Deleted!", "Your toy has been deleted.", "success");
//             }
//           }
//         });
//       });
//   };

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
          <div className="card-actions justify-end mt-3">
            <button className="btn btn-success">Updated</button>
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
