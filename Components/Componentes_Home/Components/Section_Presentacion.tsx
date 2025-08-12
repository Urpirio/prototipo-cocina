import { PiTimerFill } from "react-icons/pi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaCirclePlay } from "react-icons/fa6";
import Comida from "@/../public/Img/Mask Group.svg";
import Image from "next/image";

import { Albert_Sans } from "next/font/google";

const albertsans = Albert_Sans({
  subsets: ["latin-ext"],
});

export default function Section_Presentacion() {
  return (
    <section className={`${albertsans.className} w-[90%] shadow-2xl shadow-gray-100 flex`}>
      <article className="flex flex-col bg-[#E7FAFE] items-start justify-between item w-1/2  rounded-l-4xl  p-5">
        <div className="flex flex-col gap-10 items-start">
          <div className="p-3 shadow-2xl shadow-gray-600/40 rounded-3xl bg-white">
            📜 Hot Recipes
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-7xl font-bold">
              Spicy delicious chicken wings
            </h1>
            <p className="text-xl text-gray-600 font-light">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className=" p-3 rounded-3xl flex items-center gap-2 bg-white/80">
              <PiTimerFill />
              <span className="text-gray-600">30 Minutes</span>
            </div>
            <div className=" p-3 rounded-3xl flex items-center gap-2 bg-white/80">
              <GiForkKnifeSpoon />
              <span className="text-gray-600">Chicken</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <img
              className="h-15 w-15 object-cover rounded-full"
              src="https://i.pinimg.com/1200x/bb/00/fb/bb00fbabd0a58d0bc918cb8bd5664837.jpg"
              alt="Foto-Cheff"
            />
            <div className="flex flex-col ">
              <span className="text-md font-bold">John Smith</span>
              <span className="text-xs text-gray-600">15 March 2022</span>
            </div>
          </div>
          <button className="border h-full py-3 px-5 bg-black text-white text-xl flex items-center gap-2 rounded-xl">
            <span>View Recipes</span>
            <FaCirclePlay />
          </button>
        </div>
      </article>
      <article className=" w-1/2 rounded-r-4xl  overflow-hidden">
        <Image
          className="h-[110%] w-[110%] object-cover"
          src={Comida}
          alt="Foto-Comida"
        />
      </article>
    </section>
  );
}
