import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function BestMenuComponent() {
  return (
    <div className=" w-full max-sm:h-full h-[800px] font-poppins">
      <h1 className=" max-sm:text-2xl text-4xl font-extrabold text-center pt-14">
        Menu best seller <span className=" text-[#f29b16]">kita</span>
      </h1>
      <div className=" grid grid-cols-3 max-sm:gap-y-6 max-sm:grid-cols-1 place-items-center pt-24">
        <div className=" max-sm:h-full h-[410px] w-[320px] overflow-hidden rounded-3xl bg-white hover:shadow-xl">
          <div className=" h-[300px] w-full">
            <img
              className=" w-full h-full object-cover"
              src="hero.jpg"
              alt="menu"
            />
          </div>
          <div className=" flex justify-between p-4">
            <div className=" flex flex-col gap-3">
              <h1>Brownies Coklat</h1>
              <div className=" text-[#ed9704] flex gap-2">
                <IoStar size={15} />
                <IoStar size={15} />
                <IoStar size={15} />
                <IoStar size={15} />
                <IoStar size={15} />
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <div className=" bg-[#ed9704] p-1 rounded-2xl text-white text-sm">
                <Link to={"https://wa.me/6285290376771"}>Order Now</Link>
              </div>
              <div className="">
                <p>Rp. 10000</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[410px] w-[320px] overflow-hidden rounded-3xl bg-white hover:shadow-xl">
          <div className=" h-[300px] w-full">
            <img
              className=" w-full h-full object-cover"
              src="hero2.jpg"
              alt="menu"
            />
          </div>
          <div className=" flex justify-between p-4">
            <div className=" flex flex-col gap-3">
              <h1>Brownies Coklat</h1>
              <div className=" text-[#ed9704] flex gap-2">
                <IoStar size={15} />
                <IoStar size={15} />
                <IoStar size={15} />
                <IoStar size={15} />
                <IoStar size={15} />
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <div className=" bg-[#ed9704] p-1 rounded-2xl text-white text-sm">
                <Link to={"https://wa.me/6285290376771"}>Order Now</Link>
              </div>
              <div className="">
                <p>Rp. 10000</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" h-[410px] w-[320px] overflow-hidden rounded-3xl bg-white hover:shadow-xl">
          <div className=" h-[300px] w-full">
            <img
              className=" w-full h-full object-cover"
              src="hero3.jpg"
              alt="menu"
            />
          </div>
          <div className=" flex justify-between p-4">
            <div className=" flex flex-col gap-3">
              <h1>Brownies Coklat</h1>
              <div className=" text-[#ed9704] flex gap-2">
                <IoStar size={15} />
                <IoStar size={15} />
                <IoStar size={15} />
                <IoStar size={15} />
                <IoStar size={15} />
              </div>
            </div>
            <div className=" flex flex-col gap-3">
              <div className=" bg-[#ed9704] p-1 rounded-2xl text-white text-sm">
                <Link to={"https://wa.me/6285290376771"}>Order Now</Link>
              </div>
              <div className="">
                <p>Rp. 10000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
