import useTitle from "../../../hooks/useTitle";
import Categorys from "../../Categorys/Categorys";
import LatestInventory from "../../LatestInventory/LatestInventory";
import Banner from "../Banner/Banner";
import SpecialOffers from "../SpecialOffers/SpecialOffers";


const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <SpecialOffers></SpecialOffers>
            <Categorys></Categorys>
            <LatestInventory></LatestInventory>
        </div>
    );
};

export default Home;