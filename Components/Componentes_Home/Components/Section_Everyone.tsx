import Image from "next/image";
import ImgChet from "@/../public/Img/Everyone/ElCheff.svg";

export default function Section_Everyone() {
  return (
    <section className="flex  px-18 justify-center">
      <div className="w-1/3 flex flex-col justify-center gap-20">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-semibold">Everyone can be a chef in their own kitchen</h2>
          <p className="text-gray-800 font-light">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <div className="">
          <button className="border py-3 px-5 bg-black text-white rounded-2xl">Learn More</button>
        </div>
      </div>
      <div className="w-1/2">
        <Image className="object-contain" src={ImgChet} alt="Img-cheff" />
      </div>
    </section>
  );
}
