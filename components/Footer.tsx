import React from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      className="flex-full text-white items-center  py-0 justify-between top-0 w-full 
    bg-[#171717] md:max-w-7xl lg:max-w-7xl mx-auto px-4 md:px-0 xl:px-0"
    >
      <div className="flex flex-col bg-[#2B2B2B] items-center h-12 mb-4 px-4 justify-center">
        <ChevronDoubleUpIcon className="h-5 w-5 mx-auto text-slate-500 hover:text-slate-600" />
        <h2 className="text-slate-500 text-xs items-center mx-auto mt-1 mb-2 hover:text-slate-600">
          Back To Top
        </h2>
      </div>
      <div
        className="flex md:flex-full lg:flex-full text-white text-xs md:text-xs lg:text-sm my-6 
        px-10 md:px-8 items-center mx-auto"
      >
        <p className="mx-4 text-xs md:text-xs lg:text-sm hover:text-slate-400">
          CHAT WITH US
        </p>
        <p className="mx-2 text-xs md:text-xs lg:text-sm hover:text-slate-400">
          HELP CENTER
        </p>
        <p className="mx-2 text-xs md:text-xs lg:text-sm hover:text-slate-400">
          CONTACT US
        </p>
        <p className="mx-2 text-xs md:text-xs lg:text-sm hover:text-slate-400">
          TERMS & CONDITIONS
        </p>
        <p className="mx-2 text-xs md:text-xs lg:text-sm hidden md:inline lg:inline  hover:text-slate-400">
          PRIVACY NOTICE
        </p>
        <p className="mx-2 text-xs md:text-xs lg:text-sm hidden md:inline lg:inline hover:text-slate-400">
          COOKIE NOTICE
        </p>
        <p className="ml-4 text-xs md:text-xs lg:text-sm hidden md:inline lg:inline hover:text-slate-400">
          BECOME A SELLER
        </p>
      </div>
      <hr className="mx-5 text-slate-700 mt-2" />
      <div className="flex items-center px-4">
        <p className="text-xs text-slate-600 items-center mx-auto mt-2 mb-2 hover:text-slate-700">
          ©{year} JodaemCart
        </p>
      </div>
    </footer>
  );
}

export default Footer;
