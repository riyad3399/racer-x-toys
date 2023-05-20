import SingleToy from "./SingleToy";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const loaderToy = useLoaderData();


  return (
    <div className="overflow-x-auto mt-10">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>Number</th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {loaderToy.map((toy, index) => (
            <SingleToy key={toy._id} toy={toy} index={index}></SingleToy>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
