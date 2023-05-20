import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Toys from "../Toys/Toys";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([])
  console.log(myToys);

  useEffect(() => {
    fetch(`http://localhost:5000/myjobs/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
       setMyToys(data);
      });
  }, [user]);

  return (
    <div>
      <h3>this is a my toys : {myToys.length}</h3>
      <div className="my-10">
        {
          myToys.map(toys => <Toys key={toys._id} toys={toys}></Toys>)
        }
      </div>
    </div>
  );
};

export default MyToys;
