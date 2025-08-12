import Image from "next/image";
import Link from "next/link";

import { Data_Categoria } from "../Data/Data_Categoria";

export default function Card_Categorias() {
  const Card = Data_Categoria.map((D) => {
    return (
      <Link
        key={D?.Titulo}
        href={"/"}
        className={`px-10 py-5 gap-10 rounded-4xl bg-linear-to-t ${D?.Bg} justify-between border-0 shadow-2xx flex flex-col items-center`}
      >
        <Image className="h-30 w-30 object-contain" src={D?.image} alt="Img-Comida" />
        <h2 className="font-bold text-lg">{D?.Titulo}</h2>
      </Link>
    );
  });

  return Card;
}
