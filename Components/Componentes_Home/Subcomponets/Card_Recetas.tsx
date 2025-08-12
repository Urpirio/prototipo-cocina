"use client";
import Image from "next/image";
import { PiTimerFill } from "react-icons/pi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Data_Recetas } from "../Data/Data_Recetas";

export default function Card_Recetas() {
  const Card = Data_Recetas.map((D) => {
    const [IsSave, setIsSave] = useState<boolean>(false);
    return (
      <article key={D?.key} className="px-3 py-5 gap-5 flex  flex-col border-0 w-90 rounded-3xl bg-linear-to-t from-[#E7F9FD] to-white">
        <div className="flex justify-end w-full">
          <Image src={D?.image} alt={D.titulo} />
          <div className="flex justify-end absolute p-4">
            <button
              onClick={() => setIsSave(!IsSave)}
              className="bg-white p-2 cursor-pointer rounded-full flex justify-center items-center"
            >
              {IsSave ? (
                <FaHeart className="text-2xl text-[#FF6363]" />
              ) : (
                <FaHeart className="text-2xl text-gray-100" />
              )}
            </button>
          </div>
        </div>
        <div className="px-2">
          <h3 className="text-xl font-bold">{D?.titulo}</h3>
        </div>
        <div className="flex items-center gap-3 px-2">
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

  return Card;
}
