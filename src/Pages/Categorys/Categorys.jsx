import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Sports from "../SubCategorys/Sports";
import Truck from "../SubCategorys/Truck";
import Regular from "../SubCategorys/Regular";
import { useEffect, useState } from "react";

const Categorys = () => {
  const [allCategory, setAllCategory] = useState([]);
  console.log(allCategory);

  useEffect(() => {
    fetch(`https://racer-x-toys-server.vercel.app/allToys`)
      .then((res) => res.json())
      .then((data) => {
        setAllCategory(data);
      });
  }, []);

  const sportsCars = allCategory.filter((item) => item.category === "sports");
  const regularCars = allCategory.filter((item) => item.category === "regular");
  const miniTrucks = allCategory.filter((item) => item.category === "truck");

  return (
    <div className="text-center">
      <Tabs>
        <TabList>
          <Tab>Sports cars</Tab>
          <Tab>Regular cars</Tab>
          <Tab>Truck</Tab>
        </TabList>

        <TabPanel>
          <h3 className="text-2xl font-semibold">Sports Cars</h3>
          <div className="grid md:grid-cols-3 gap-4 ">
            {sportsCars &&
              sportsCars.map((sportCar) => (
                <Sports key={sportCar._id} sportCar={sportCar}></Sports>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="text-2xl font-semibold">Regular Cars</h3>
          <div className="grid md:grid-cols-3 gap-4 ">
            {regularCars &&
              regularCars.map((regularCar) => (
                <Regular key={regularCar._id} regularCar={regularCar}></Regular>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="text-2xl font-semibold">Mini Trucks</h3>
          <div className="grid md:grid-cols-3 gap-4 ">
            {miniTrucks &&
              miniTrucks.map((miniTruck) => (
                <Truck key={miniTruck._id} miniTruck={miniTruck}></Truck>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categorys;
