import Image from "next/image";
import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";
import Banner from "public/assets/ad-1.jpg";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="mb-5">
      <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
        <div className="flex justify-between items-center gap-10">
          <Link href="/">Home</Link>
          <Link href="/">Trending</Link>
          <Link href="/">About</Link>
          <Link href="/">Sign In</Link>
        </div>
        <div className="hidden sm:block">
          <SocialLinks />
        </div>
      </nav>
      <div className="flex justify-between gap-8 mt-8 mb-4 mx-10">
        <div className="basis-2/3 md:mt-3">
          <h1 className="font-bold text-3xl md:text-5xl">WAVEY</h1>
          <p className="text-sm mt-3">
            Exploring the Cosmos through Radio Astronomy
          </p>
        </div>
        <div className="basis-full relative w-auto h-32 bg-wh-500">
          <Image
            fill
            alt="advert-1"
            placeholder="blur"
            src={Banner}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <hr className="border-1 mx-10" />
    </header>
  );
};

export default Navbar;
