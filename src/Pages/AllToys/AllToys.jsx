import { useEffect, useState } from "react";
import SingleToy from "./SingleToy";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle('All Toys')
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("https://racer-x-toys-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  const handleSearch = () => {
    fetch(`https://racer-x-toys-server.vercel.app/toySearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  return (
    <div className="overflow-x-auto mt-10">
      <div className="form-control my-8">
        <div className="input-group flex justify-center">
          <input
            type="text"
            placeholder="Search…"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSearch}
            className="input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {toys.map((toy, index) => (
            <SingleToy key={toy._id} toy={toy} index={index}></SingleToy>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
