import banner from "../../../assets/images/banner (2).jpg";

const Banner = () => {
  return (
    <div className="my-10 grid md:grid-cols-2 items-center gap-5 ">
      <div className="w-full space-y-5">
        <h3 className="text-6xl font-bold ">
          WELCOME TO MY <br />
          <span className="text-[#19A7CE] "> RECER X TOYS</span>
        </h3>
        <p className="text-xl font-semibold">
          So, step into the world of car toys with us and let your child's
          imagination race ahead. Start exploring our website today and discover
          the perfect car toy that will bring endless smiles and adventures into
          your child's life!
        </p>
        <button className="btn btn-custom btn-wide ">
          Get Start
        </button>
      </div>
      <div className="w-full">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
