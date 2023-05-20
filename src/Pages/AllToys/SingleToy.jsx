import { Link } from "react-router-dom";

const SingleToy = ({ toy, index }) => {
  console.log(toy);
  const { category, name, price, quantity, sellerName, _id } = toy;

 

  return (
    <tr className="hover">
      <td className="text-base font-medium">{ index + 1}</td>
      <td className="text-base font-medium">{sellerName}</td>
      <td className="text-base font-medium">{name}</td>
      <td className="text-base font-medium">{category}</td>
      <td className="text-base font-medium">{price}</td>
      <td className="text-base font-medium">{quantity}</td>
      <td>
        <Link to={`/viewDetails/${_id}`}>
          <button className="btn btn-outline btn-primary">View Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default SingleToy;
