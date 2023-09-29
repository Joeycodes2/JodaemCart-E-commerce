import React from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer
      className="flex-full text-white items-center md:px-0 py-0 justify-between top-0 w-full 
    bg-[#171717] max-w-7xl mx-auto px-8 xl:px-0"
    >
      <div className="flex flex-col bg-[#2B2B2B] items-center h-12 mb-4 px-4 justify-center">
        <ChevronDoubleUpIcon className="h-5 w-5 mx-auto text-slate-500 hover:text-slate-600" />
        <h2 className="text-slate-300 text-xs items-center mx-auto mt-1 mb-2 hover:text-slate-400">
          Back To Top
        </h2>
      </div>
      <div
        className="flex flex-full text-white text-xs my-6 md:px-8 
      items-center mx-auto"
      >
        <p className="mx-auto mr-4 hover:text-slate-400">CHAT WITH US</p>
        <p className="mx-4 hover:text-slate-400">HELP CENTER</p>
        <p className="mx-4 hover:text-slate-400">CONTACT US</p>
        <p className="mx-4 hover:text-slate-400">TERMS & CONDITIONS</p>
        <p className="mx-4 hover:text-slate-400">PRIVACY NOTICE</p>
        <p className="mx-4 hover:text-slate-400">COOKIE NOTICE</p>
        <p className="mx-auto ml-4 hover:text-slate-400">BECOME A SELLER</p>
      </div>
      <hr className="mx-5 text-slate-700 mt-2" />
      <div className="flex items-center px-4">
        <p className="text-xs text-slate-600 items-center mx-auto mt-2 mb-2 hover:text-slate-700">
          ©JodaemCart {year}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
