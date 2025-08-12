import Image from "next/image";
import BackGroundFood from "@/../public/Img/Inbox/Backgroung.svg";

export default function Section_Inbox() {
  return (
    <section className="flex relative">
      <Image src={BackGroundFood} alt="Bg-Food" />
      <div className="absolute w-full h-full flex gap-5 flex-col items-center justify-center">
        <div  className="text-center flex items-center flex-col gap-2">
          <h2 className="text-4xl font-semibold ">Deliciousness to your inbox</h2>
          <p className="w-[80%] text-gray-500 font-light">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
          </p>
        </div>
        <div className="border border-gray-50 bg-white p-2 rounded-2xl">
          <input className="w-60 px-2" placeholder="Your email address..." type="text" />
          <button className="bg-black text-white py-3 px-5 rounded-xl">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
