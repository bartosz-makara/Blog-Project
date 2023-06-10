import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COL */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold text-2xl">WAVEY</h4>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            beatae ea quae sapiente iusto est tempore, tenetur, omnis delectus
            tempora laudantium autem rerum deleniti eveniet?
          </p>
          <p>All rights reserved</p>
        </div>
        {/* SECOND COL */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Link</p>
          <p className="my-5">Another link</p>
          <p>And another one</p>
        </div>
        {/* THIRD COL */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact US</h4>
          <p className="my-5">Lorem ipsum dolor sit amet.</p>
          <p className="my-5">0 800 123 456</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
