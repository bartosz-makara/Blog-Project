import React from "react";
import SocialLinks from "./SocialLinks";
import Subscribe from "./Subscribe";
import Image from "next/image";
import Ad2 from "public/assets/ad-2.jpg";
import Profile from "public/assets/about-profile.jpg";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        Subscribe and follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <Image
        className="hidden md:block my-8 w-full"
        alt="advert-2"
        placeholder="blur"
        src={Ad2}
        style={{ width: "500", height: "1000", objectFit: "cover" }}
      />
      <h4 className="bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center">
        About the blog
      </h4>
      <div className="flex justify-center my-6">
        <Image
          alt="profile"
          placeholder="blur"
          src={Profile}
          style={{ width: "500px", height: "250px", objectFit: "cover" }}
        />
      </div>
      <h4 className="text-wh-900 py-3 px-5 font-bold text-center">
        Bartosz Makara
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        sequi. Aut, adipisci. Expedita, eveniet consequuntur!
      </p>
    </section>
  );
};

export default Sidebar;
