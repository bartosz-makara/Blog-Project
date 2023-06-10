import React from "react";
import Image from "next/image";
import Twitter from "public/assets/social_twitter.png";
import Instagram from "public/assets/social_instagram.png";
import Discord from "public/assets/social_discord.png";

type Props = {
  isDark?: boolean;
};

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className="flex justify-between items-center gap-7">
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer noopener"
        title="twitter"
      >
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="twitter"
          src={Twitter}
          width={20}
          height={20}
        />
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer noopener"
        title="instagram"
      >
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="instagram"
          src={Instagram}
          width={20}
          height={20}
        />
      </a>

      <a
        href="https://discord.com"
        target="_blank"
        rel="noreferrer noopener"
        title="discord"
      >
        <Image
          className={`${isDark ? "brightness-0" : ""} hover:opacity-50`}
          alt="discord"
          src={Discord}
          width={20}
          height={20}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
