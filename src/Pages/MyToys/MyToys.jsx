import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Toys from "../Toys/Toys";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  console.log(myToys);

  useEffect(() => {
    fetch(
      `https://racer-x-toys-server.vercel.app/myToys/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);

  const handleDeteleToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://racer-x-toys-server.vercel.app/deleteToy/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaning = myToys.filter((t) => t._id !== id);
              setMyToys(remaning);
            }
          });
      }
    });
  };



  return (
    <div>
      <div className="my-10">
        {myToys.map((toys) => (
          <Toys
            key={toys._id}
            toys={toys}
            handleDeteleToy={handleDeteleToy}
          
          ></Toys>
        ))}
      </div>
    </div>
  );
};

export default MyToys;
