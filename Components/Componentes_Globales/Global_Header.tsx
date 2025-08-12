"use client";
import Image from "next/image";
import Logo from "@/../public/Img/Foodieland..svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LiaFacebookF } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Global_Header() {
  return (
    <header className="flex items-center border-b border-gray-300 justify-between px-5 py-8 ">
      <div className=" flex flex-grow">
        <Image src={Logo} alt="Logo-Company" />
      </div>
      <nav className="flex gap-10 justify-center  flex-grow">
        <Link className="font-semibold" href={"/"}>Home</Link>
        <Link className="font-semibold" href={"/recipes"}>Recipes</Link>
        <Link className="font-semibold" href={"/blog"}>Blog</Link>
        <Link className="font-semibold" href={"/contact"}>Contact</Link>
        <Link className="font-semibold" href={"/about_us"}>About us</Link>
      </nav>
      <div className="flex flex-grow justify-end items-center gap-5 text-xl ">
        <Link href={""}>
          <LiaFacebookF />
        </Link>
        <Link href={""}>
          <FaTwitter />
        </Link>
        <Link href={""}>
          <FaInstagram />
        </Link>
      </div>
    </header>
  );
}
