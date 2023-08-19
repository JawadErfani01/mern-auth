import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="h-18 py-2 text-xl px-14  bg-white">
      <nav className=" flex justify-between text-center h-full items-center">
        <div className=" text-start  w-[40%]">
          <Link className="hover:border-b-2" href="/about">
            How HealthyMe Works?
          </Link>
          <Link className=" hover:border-b-2  mx-10" href="/articles">
            Articles
          </Link>
        </div>
        <div className="  w-[20%] text-center">
          <Link className="flex items-center text-2xl" href="/">
            <Image alt="logo" src="/assets/logo.png" height={60} width={50} />
            <span> Healthyme</span>
          </Link>
        </div>
        <div className=" flex justify-end gap-10  w-[40%]">
          <Link className="hover:border-b-2" href="/shop">
            ShopMeals
          </Link>
          <Link href="/cart">cart</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
