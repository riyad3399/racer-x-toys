import latest1 from "../../assets/images/latest (1).jpg";
import latest2 from "../../assets/images/offer (3).jpg";
import latest3 from "../../assets/images/latest (5).jpg";
import latest4 from "../../assets/images/latest (6).jpg";
import latest5 from "../../assets/images/latest (7).jpg";
import latest6 from "../../assets/images/latest (8).jpg";

const LatestInventory = () => {
  return (
      <div className="my-24">
          <h1 className="text-5xl text-center font-bold text-cyan-400
          mb-6">Latest Inventory</h1>
          <hr className="border w-1/2 mx-auto mb-10"/>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card w-full bg-base-100 hover:shadow-2xl border-2  hover:border-none">
          <figure className="p-4">
            <img className="w-80 h-52 rounded-md" src={latest1} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Hot Wheels
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-lg">
              Hot Wheels is a brand of die-cast toy cars produced by Mattel.
            </p>
            <div className="card-actions flex justify-center">
              <div className="badge badge-outline p-4">2018</div>
              <div className="badge badge-outline p-4">255 HP</div>
              <div className="badge badge-outline p-4">Manual</div>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 hover:shadow-2xl border-2  hover:border-none">
          <figure className="p-4">
            <img className="w-80 h-52 rounded-md" src={latest2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            Tomica
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-lg">
            Tomica is a Japanese brand known for producing die-cast toy vehicles.
            </p>
            <div className="card-actions flex justify-center">
              <div className="badge badge-outline p-4">2021</div>
              <div className="badge badge-outline p-4">250 HP</div>
              <div className="badge badge-outline p-4">Manual</div>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 hover:shadow-2xl border-2  hover:border-none">
          <figure className="p-4">
            <img className="w-80 h-52 rounded-md" src={latest3} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            Majorette
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-lg">
            Majorette is a French brand that offers a wide range of die-cast toy vehicles.
            </p>
            <div className="card-actions flex justify-center">
              <div className="badge badge-outline p-4">2020</div>
              <div className="badge badge-outline p-4">265 HP</div>
              <div className="badge badge-outline p-4">Manual</div>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 hover:shadow-2xl border-2  hover:border-none">
          <figure className="p-4">
            <img className="w-80 h-52 rounded-md" src={latest4} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            Bburago
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-lg">
            Bburago is an Italian brand that produces die-cast metal toy cars and model kits.
            </p>
            <div className="card-actions flex justify-center">
              <div className="badge badge-outline p-4">2022</div>
              <div className="badge badge-outline p-4">280 HP</div>
              <div className="badge badge-outline p-4">Manual</div>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 hover:shadow-2xl border-2  hover:border-none">
          <figure className="p-4">
            <img className="w-80 h-52 rounded-md" src={latest5} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            Maisto
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-lg">
            Maisto is a brand that specializes in die-cast toy vehicles and model kits.
            </p>
            <div className="card-actions flex justify-center">
              <div className="badge badge-outline p-4">2018</div>
              <div className="badge badge-outline p-4">255 HP</div>
              <div className="badge badge-outline p-4">Manual</div>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 hover:shadow-2xl border-2  hover:border-none">
          <figure className="p-4">
            <img className="w-80 h-52 rounded-md" src={latest6} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            Matchbox
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p className="text-lg">
            Matchbox is another well-known brand of die-cast toy cars that is also owned by Mattel.
            </p>
            <div className="card-actions flex justify-center">
              <div className="badge badge-outline p-4">2019</div>
              <div className="badge badge-outline p-4">255 HP</div>
              <div className="badge badge-outline p-4">Manual</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestInventory;
