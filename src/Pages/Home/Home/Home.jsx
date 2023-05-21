import { useEffect } from "react";
import useTitle from "../../../hooks/useTitle";
import Categorys from "../../Categorys/Categorys";
import LatestInventory from "../../LatestInventory/LatestInventory";
import Banner from "../Banner/Banner";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useTitle("Home");
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div data-aos="flip-left">
        <Banner></Banner>
      </div>
      <div data-aos="flip-left">
        <SpecialOffers></SpecialOffers>
      </div>
      <div data-aos="flip-left">
        <Categorys></Categorys>
      </div>
      <div data-aos="flip-left">
        <LatestInventory></LatestInventory>
      </div>
    </div>
  );
};

export default Home;
