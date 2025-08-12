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
    <header className="flex items-center border justify-between px-5 py-8 ">
      <div className="border flex flex-grow">
        <Image src={Logo} alt="Logo-Company" />
      </div>
      <nav className="flex gap-5 justify-center border flex-grow">
        <Link href={"/"}>Home</Link>
        <Link href={"/recipes"}>Recipes</Link>
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/about_us"}>About us</Link>
      </nav>
      <div className="flex flex-grow justify-end items-center gap-5 text-xl border">
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
