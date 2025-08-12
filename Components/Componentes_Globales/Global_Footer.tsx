import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/Img/Foodieland..svg";

export default function Global_Footer() {
  return (
    <footer className="py-10 border-t border-gray-300">
      <section className="flex  justify-between items-center px-5">
        <div className="flex flex-grow flex-col">
          <Image src={Logo} alt="" />
          <h2>Lorem ipsum dolor sit amet, consectetuipisicing elit.</h2>
        </div>
        <nav className="flex flex-grow justify-end gap-5">
          <Link href={""}>Recipes</Link>
          <Link href={""}>Blog</Link>
          <Link href={""}>Contact</Link>
          <Link href={""}>About us</Link>
        </nav>
      </section>
      <section>
        <div>
          <h3></h3>
        </div>
      </section>
    </footer>
  );
}
