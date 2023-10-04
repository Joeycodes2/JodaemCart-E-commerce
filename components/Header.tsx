"use client";

import Image from "next/image";
import Link from "next/link";
import Jodaemcart from "app/img/jodaemcart.jpeg";
import { Icon } from "@iconify/react";

function Header() {
  // const handleAccount = () => {
  //   return (
  //     <div className="flex flex-col space-y-2 p-2">
  //       <button
  //         className="button text-sm bg-orange-400 text-white ml-2 mr-6 cursor-pointer px-2
  //         hover:bg-orange-500 hover:text-slate-100"
  //       >
  //         SIGN IN
  //       </button>
  //       <a className="p-2">
  //         <span>My Account</span>
  //       </a>
  //       <a className="p-2">
  //         <span>Orders</span>
  //       </a>
  //       <a className="p-2">
  //         <span>Saved items</span>
  //       </a>
  //     </div>
  //   );
  // };

  return (
    <header
      className="flex items-center px-4 py-2 fixed justify-between top-0 w-full 
    bg-white z-50 shadow"
    >
      <div className="flex md:flex-row md:mx-auto md:px-8 w-full">
        <Link href="/" className="">
          <Image
            src={Jodaemcart}
            height={100}
            width={150}
            alt="Logo"
            className="rounded-md mr-6"
          />
        </Link>
        <div className="md:flex flex-row -py-4 mr-2 ml-2 rounded-lg w-full space-x-2 hidden">
          <form
            method="post"
            action="/"
            className="flex p-2.5 rounded-lg border border-[#72767d] bg-[#fff] w-full 
                items-center"
          >
            <Icon
              icon="ic:baseline-search"
              className="mr-2 w-8 h-8 text-gray-700"
            />
            <input
              type="text"
              name="text"
              placeholder="Search products, brands and categories"
              className="md:flex bg-transparent focus:outline-none text-sm text-[#72767d] w-full p-2
           placeholder-[#72767d] hover:focus:ring-1 hover:focus:ring-slate-400 hidden"
            />
          </form>
          <button
            type="submit"
            className="button text-sm bg-orange-400 text-white ml-2 mr-6 cursor-pointer px-2
          hover:bg-orange-500 hover:text-slate-100"
          >
            SEARCH
          </button>
        </div>
        <div className="flex flex-row">
          <label className="label">
            <span className="mx-1 items-center">
              <Icon icon="pajamas:user" className="h-6 w-6" />
            </span>
            Account
            <Icon icon="system-uicons:chevron-down" className="h-6 w-6" />
          </label>
          <label className="label hidden md:inline-flex lg:inline-flex xl:inline-flex">
            <span className="ml-1 mr-2">
              <Icon
                icon="material-symbols:help-outline"
                className="h-6 w-6 hidden md:inline lg:inline-flex xl:inline-flex"
              />
            </span>
            Help
            <Icon
              icon="system-uicons:chevron-down"
              className="h-6 w-6 hidden md:inline lg:inline-flex xl:inline-flex"
            />
          </label>
          <a className="label">
            <span className="mx-2">
              <Icon icon="mdi:cart-outline" className="h-6 w-6" />
            </span>
            Cart
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
