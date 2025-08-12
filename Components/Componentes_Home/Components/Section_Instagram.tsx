import Image from "next/image";
import ImgPost from "@/../public/Img/InstagramPOST/Post.svg";
import { FaInstagram } from "react-icons/fa";

export default function Section_Instagram() {
  return (
    <section className="flex flex-col bg-linear-to-t py-40 from-[#E7F9FD] to-white gap-10 w-full">
      <div className="text-center flex flex-col gap-5">
        <h2 className="text-4xl font-semibold">
          Check out @foodieland on Instagram
        </h2>
        <p className="text-gray-500 font-light">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
        </p>
      </div>
      <div className="flex gap-5 justify-center">
        <Image src={ImgPost} alt="Image-post" />
        <Image src={ImgPost} alt="Image-post" />
        <Image src={ImgPost} alt="Image-post" />
        <Image src={ImgPost} alt="Image-post" />
      </div>
      <div className="w-full flex justify-center">
        <button className="flex items-center gap-3 border-0 px-5 py-3 bg-black text-white rounded-2xl shadow-2xl shadow-gray-300/50 cursor-pointer hover:-translate-y-3 transition-all duration-300">
          <span>Visit Our Instagram</span>
          <FaInstagram />
        </button>
      </div>
    </section>
  );
}
