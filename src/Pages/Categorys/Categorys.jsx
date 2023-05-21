import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Sports from "../SubCategorys/Sports";
import Truck from "../SubCategorys/Truck";
import Regular from "../SubCategorys/Regular";
import { useEffect, useState } from "react";
import "./Categorys.css";

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
    <div className="text-center my-20">
      <h2 className="text-5xl text-center font-bold mb-6 text-cyan-600">
        Shop by Category
      </h2>
      <hr className="border border-gray-300 w-1/2 mx-auto mb-16" />
      <Tabs>
        <TabList>
          <Tab>
            <span className="text-xl font-medium text-gray-400">
              Sports cars
            </span>
          </Tab>
          <Tab>
            <span className="text-xl font-medium text-gray-400">
              Regular cars
            </span>{" "}
          </Tab>
          <Tab>
            <span className="text-xl font-medium text-gray-400">Truck</span>{" "}
          </Tab>
        </TabList>

        <TabPanel>
          <h3 className="text-2xl font-semibold mb-4">Sports Cars</h3>
          <div className="grid md:grid-cols-3 gap-6 ">
            {sportsCars &&
              sportsCars.map((sportCar) => (
                <Sports key={sportCar._id} sportCar={sportCar}></Sports>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="text-2xl font-semibold mb-4">Regular Cars</h3>
          <div className="grid md:grid-cols-3 gap-6 ">
            {regularCars &&
              regularCars.map((regularCar) => (
                <Regular key={regularCar._id} regularCar={regularCar}></Regular>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="text-2xl font-semibold mb-4">Mini Trucks</h3>
          <div className="grid md:grid-cols-3 gap-6 ">
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
