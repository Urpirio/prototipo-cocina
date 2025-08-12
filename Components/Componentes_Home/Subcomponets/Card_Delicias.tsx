"use client";
import Image from "next/image";
import { PiTimerFill } from "react-icons/pi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { Data_Delicias } from "../Data/Data_Delicias";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function Card_Delicias() {
  const Cards = Data_Delicias.map((D) => {
    const [IsSave, setIsSave] = useState<boolean>(false);
    return (
      <article className="w-80">
        <div className="flex justify-end">
          <Image src={D?.image} alt={D.titulo} />
          <div className="absolute p-2 ">
            <button
              className=" bg-white cursor-pointer hover:opacity-80 p-2 rounded-full"
              onClick={() => setIsSave(!IsSave)}
            >
              {IsSave ? (
                <FaHeart className="text-2xl text-[#FF6363]" />
              ) : (
                <FaHeart className="text-2xl text-gray-300" />
              )}
            </button>
          </div>
        </div>
        <div className="py-2">
          <h4 className="font-bold text-xl">{D?.titulo}</h4>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <PiTimerFill className="text-md" />
            <span className="text-md font-light">{D?.tiempo}</span>
          </div>
          <div className="flex items-center gap-1">
            <GiForkKnifeSpoon className="text-md" />
            <span className="text-md font-light">{D?.tipo}</span>
          </div>
        </div>
      </article>
    );
  });

  return Cards;
}
